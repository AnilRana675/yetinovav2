"use client";

import { useEffect, useRef, useMemo } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const defaultColors = ["#ffffff", "#a5b4fc", "#c7d2fe"];

const hexToRgb = (hex: string): [number, number, number] => {
  const cleanHex = hex.replace(/^#/, "");
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((c) => c + c)
          .join("")
      : cleanHex;
  const int = parseInt(fullHex, 16);
  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255,
  ];
};

// Framerate-independent lerp
const damp = (start: number, end: number, lambda: number, delta: number) =>
  start + (end - start) * (1 - Math.exp(-lambda * delta));

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  varying float vAlpha;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 5.0; 
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }
    
    vAlpha = 0.7 + 0.3 * sin(t * 1.5 + random.y * 10.0);

    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uAlphaParticles;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    float circle = smoothstep(0.5, 0.35, d);
    
    float alpha = circle * vAlpha;
    if (uAlphaParticles == 0.0) {
       alpha = circle; // Ignore twinkle alpha if disabled
    }

    gl_FragColor = vec4(vColor, alpha);
  }
`;

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  pixelRatio?: number;
  className?: string;
}

const Particles = ({
  particleCount = 80,
  particleSpread = 10,
  speed = 0.08,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = true,
  particleBaseSize = 120,
  sizeRandomness = 1,
  cameraDistance = 25,
  disableRotation = false,
  pixelRatio = 1,
  className,
}: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mutable state for the animation loop to access without triggering re-renders
  const loopState = useRef({
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    disableRotation,
  });

  // Sync props to refs in effect to avoid accessing refs during render
  useEffect(() => {
    loopState.current = {
      speed,
      moveParticlesOnHover,
      particleHoverFactor,
      disableRotation,
    };
  }, [speed, moveParticlesOnHover, particleHoverFactor, disableRotation]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);
  const rafIdRef = useRef<number | undefined>(undefined);
  const programRef = useRef<Program | null>(null);

  const palette = useMemo(
    () => (particleColors?.length ? particleColors : defaultColors),
    [particleColors]
  );

  // 1. Core WebGL Setup & Animation Loop (Runs when geometry-altering props change)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({
        dpr: Math.min(pixelRatio, 2),
        depth: false,
        alpha: true,
        antialias: false,
      });
    } catch (error) {
      console.warn("WebGL not supported:", error);
      return;
    }

    const gl = renderer.gl;
    gl.canvas.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;";
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
      }, 100);
    };
    window.addEventListener("resize", resize, { passive: true });
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!loopState.current.moveParticlesOnHover) return;
      const rect = container.getBoundingClientRect();
      targetMouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount * 4);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );
      const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
      colors.set(col, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * pixelRatio },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
      },
      transparent: true,
      depthTest: false,
    });

    programRef.current = program;

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t: number) => {
      rafIdRef.current = requestAnimationFrame(update);

      if (!isVisibleRef.current) return;

      const delta = t - lastTime;
      lastTime = t;

      // Delta-time based animation scales properly on all refresh rates
      elapsed += delta * loopState.current.speed;
      program.uniforms.uTime.value = elapsed * 0.001;

      if (loopState.current.moveParticlesOnHover) {
        // Smooth dampening independent of framerate
        mouseRef.current.x = damp(
          mouseRef.current.x,
          targetMouseRef.current.x,
          0.005,
          delta
        );
        mouseRef.current.y = damp(
          mouseRef.current.y,
          targetMouseRef.current.y,
          0.005,
          delta
        );
        particles.position.x =
          -mouseRef.current.x * loopState.current.particleHoverFactor;
        particles.position.y =
          -mouseRef.current.y * loopState.current.particleHoverFactor;
      }

      if (!loopState.current.disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += delta * 0.00015 * loopState.current.speed; // Frame-independent rotation
      }

      renderer.render({ scene: particles, camera });
    };

    rafIdRef.current = requestAnimationFrame(update);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      observer.disconnect();
      geometry.remove();
      program.remove();
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      programRef.current = null;
    };
  }, [
    particleCount,
    palette,
    cameraDistance,
    pixelRatio,
    particleSpread,
    particleBaseSize,
    sizeRandomness,
    alphaParticles,
  ]);
  // Notice how small the dependency array is now!

  // 2. Uniform Updates (Runs when non-geometry props change, avoiding context rebuilds)
  useEffect(() => {
    if (programRef.current) {
      programRef.current.uniforms.uSpread.value = particleSpread;
      programRef.current.uniforms.uBaseSize.value =
        particleBaseSize * pixelRatio;
      programRef.current.uniforms.uSizeRandomness.value = sizeRandomness;
      programRef.current.uniforms.uAlphaParticles.value = alphaParticles
        ? 1
        : 0;
    }
  }, [
    particleSpread,
    particleBaseSize,
    sizeRandomness,
    alphaParticles,
    pixelRatio,
  ]);

  return (
    <div ref={containerRef} className={className || "relative w-full h-full"} />
  );
};

export default Particles;
