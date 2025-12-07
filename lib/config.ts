import { IMAGES } from './images';

export const NEXUS_CONFIG = {
  meta: {
    title: "NEXUS 3D",
    subtitle: "3D Space • Drag to Explore",
    version: "1.0.0"
  },
  grid: {
    cols: 7,
    rows: 4,
    spacing: { x: 440, y: 300, z: 620 },
    baseDepth: -900,
  },
  camera: {
    speed: {
      move: 600,
      shiftMove: 1200,
      look: 0.06,
      scroll: 0.6
    },
    limits: {
      zMin: -5200,
      zMax: 2200,
      pitchMin: -35,
      pitchMax: 25
    },
    initial: {
      x: 0,
      y: 0,
      z: 800,
      pitch: -6,
      yaw: 0
    }
  },
  images: IMAGES
} as const;

export type ConfigType = typeof NEXUS_CONFIG;
