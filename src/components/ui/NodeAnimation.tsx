"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glowColor: string;
  coreColor: string;
}

const BLUE_GLOW = "107, 158, 170";
const BLUE_CORE = "40, 80, 95";
const GREEN_GLOW = "85, 184, 96";
const GREEN_CORE = "4, 62, 102";

interface NodeAnimationProps {
  glowColor?: string;
  coreColor?: string;
}

export function NodeAnimation({
  glowColor: _glowColor = "85, 184, 96",
  coreColor: _coreColor = "4, 62, 102",
}: NodeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initNodes();
    };

    const initNodes = () => {
      const width = canvas.width;
      const isMobile = width < 768;

      const areaDivisor = isMobile ? 14000 : 15000;
      const nodeCount = Math.floor((canvas.width * canvas.height) / areaDivisor);

      nodesRef.current = [];

      for (let i = 0; i < nodeCount; i++) {
        const baseRadius = isMobile ? 2.2 : 2.8;
        const useBlue = Math.random() > 0.5;

        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * baseRadius + 1.5,
          glowColor: useBlue ? BLUE_GLOW : GREEN_GLOW,
          coreColor: useBlue ? BLUE_CORE : GREEN_CORE,
        });
      }
    };

    const drawNode = (node: Node) => {
      if (!ctx) return;

      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);

      gradient.addColorStop(0, `rgba(${node.glowColor}, 0.9)`);
      gradient.addColorStop(0.4, `rgba(${node.glowColor}, 0.4)`);
      gradient.addColorStop(1, `rgba(${node.glowColor}, 0)`);

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawConnection = (node1: Node, node2: Node, distance: number, maxDistance: number) => {
      if (!ctx) return;

      const opacity = 1 - distance / maxDistance;

      const dist1 = Math.sqrt(
        (node1.x - mouseRef.current.x) ** 2 + (node1.y - mouseRef.current.y) ** 2
      );
      const dist2 = Math.sqrt(
        (node2.x - mouseRef.current.x) ** 2 + (node2.y - mouseRef.current.y) ** 2
      );
      const coreColor = dist1 < dist2 ? node1.coreColor : node2.coreColor;

      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = `rgba(${coreColor}, ${opacity * 0.5})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const isMobile = canvas.width < 768;
      const maxDistance = isMobile ? 110 : 150;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);

        if (mouseDist < 120 && mouseDist > 0) {
          node.vx -= (dx / mouseDist) * 0.02;
          node.vy -= (dy / mouseDist) * 0.02;
        }

        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 1) {
          node.vx = (node.vx / speed) * 1;
          node.vy = (node.vy / speed) * 1;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distance = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2);

          if (distance < maxDistance) {
            drawConnection(node, other, distance, maxDistance);
          }
        }

        drawNode(node);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
