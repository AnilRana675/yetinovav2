"use client";

import { useEffect, useRef } from "react";

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
}

const Squares: React.FC<SquaresProps> = ({
  direction = "down",
  speed = 1,
  borderColor = "#999",
  squareSize = 25,
  hoverFillColor = "#222",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<GridOffset | null>(null);
  const resolvedBorderColorRef = useRef<CanvasStrokeStyle>(borderColor);
  const resolvedHoverFillColorRef = useRef<CanvasStrokeStyle>(hoverFillColor);

  useEffect(() => {
    const resolveColor = (color: CanvasStrokeStyle): CanvasStrokeStyle => {
      if (typeof color === "string" && color.startsWith("var(")) {
        const varName = color.match(/var\(([^)]+)\)/)?.[1];
        if (varName) {
          const computedColor = getComputedStyle(document.documentElement)
            .getPropertyValue(varName)
            .trim();
          return computedColor || color;
        }
      }
      return color;
    };

    resolvedBorderColorRef.current = resolveColor(borderColor);
    resolvedHoverFillColorRef.current = resolveColor(hoverFillColor);
  }, [borderColor, hoverFillColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      try {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
        numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
      } catch (error) {
        console.error("Canvas resize error:", error);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;

      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
        const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

        for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
          for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
            const squareX = x - (gridOffset.current.x % squareSize);
            const squareY = y - (gridOffset.current.y % squareSize);

            if (
              hoveredSquareRef.current &&
              Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
              Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
            ) {
              ctx.fillStyle = resolvedHoverFillColorRef.current;
              ctx.fillRect(squareX, squareY, squareSize, squareSize);
            }

            ctx.strokeStyle = resolvedBorderColorRef.current;
            ctx.strokeRect(squareX, squareY, squareSize, squareSize);
          }
        }

        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
        );
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "#060010");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } catch (error) {
        console.error("Canvas draw error:", error);
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "#000000");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      try {
        const effectiveSpeed = Math.max(speed, 0.1);
        switch (direction) {
          case "right":
            gridOffset.current.x =
              (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
            break;
          case "left":
            gridOffset.current.x =
              (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
            break;
          case "up":
            gridOffset.current.y =
              (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
            break;
          case "down":
            gridOffset.current.y =
              (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
            break;
          case "diagonal":
            gridOffset.current.x =
              (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
            gridOffset.current.y =
              (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
            break;
          default:
            break;
        }

        drawGrid();
        requestRef.current = requestAnimationFrame(updateAnimation);
      } catch (error) {
        console.error("Canvas animation error:", error);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      try {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
        const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

        const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
        const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

        if (
          !hoveredSquareRef.current ||
          hoveredSquareRef.current.x !== hoveredSquareX ||
          hoveredSquareRef.current.y !== hoveredSquareY
        ) {
          hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
        }
      } catch (error) {
        console.error("Canvas mouse move error:", error);
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, squareSize]);

  return <canvas ref={canvasRef} className="w-full h-full border-none block" />;
};

export default Squares;
