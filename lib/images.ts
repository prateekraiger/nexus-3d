export const IMAGES = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/600/800?random=${i}`,
  title: `Project NEXUS ${i + 1}`,
  description: "High-performance rendering with React & Tailwind"
})) as const;
