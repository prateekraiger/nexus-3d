import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Clamp a value between min and max
export const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

// Linear interpolation
export const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

// Generate a random number between min and max
export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

// Generate deterministic random based on index (for consistent layout across re-renders if needed)
export const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};