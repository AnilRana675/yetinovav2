import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a hex color string to RGB values normalized to 0-1 range.
 * Supports 3-char (#RGB) and 6-char (#RRGGBB) hex formats.
 */
export function hexToRgb(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, "");

  // Handle 3-character hex
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  // Handle 8-character hex (ignore alpha)
  if (hex.length === 8) {
    hex = hex.slice(0, 6);
  }

  if (hex.length !== 6) {
    console.error(`Invalid hex color: #${hex}`);
    return [0, 0, 0];
  }

  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  return [r, g, b];
}
