"use client";

import { cn } from "@/lib/utils";

interface BlurGradientProps {
  colorStops?: string[];
  speed?: "slow" | "medium" | "fast";
  opacity?: number;
  className?: string;
}

export function BlurGradient({
  colorStops = ["#5227FF", "#7cff67", "#606FCC"],
  speed = "slow",
  opacity = 0.3,
  className,
}: BlurGradientProps) {
  const speedValues = {
    slow: "20s",
    medium: "10s",
    fast: "5s",
  };

  const duration = speedValues[speed];

  const gradient1 = `radial-gradient(ellipse 80% 50% at 20% 40%, ${colorStops[0]}80, transparent)`;
  const gradient2 = `radial-gradient(ellipse 60% 80% at 80% 60%, ${colorStops[1]}60, transparent)`;
  const gradient3 = `radial-gradient(ellipse 70% 60% at 50% 80%, ${colorStops[2] || colorStops[0]}40, transparent)`;

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      style={{ opacity }}
    >
      <div
        className="absolute inset-0 blur-3xl blur-wave-1"
        style={
          {
            background: gradient1,
            "--blur-duration": duration,
          } as React.CSSProperties
        }
      />
      <div
        className="absolute inset-0 blur-3xl blur-wave-2"
        style={
          {
            background: gradient2,
            "--blur-duration": duration,
          } as React.CSSProperties
        }
      />
      <div
        className="absolute inset-0 blur-3xl blur-wave-3"
        style={
          {
            background: gradient3,
            "--blur-duration": duration,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
