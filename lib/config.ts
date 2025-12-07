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
    spacing: { x: 380, y: 400, z: 400 },
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
      zMax: 3000, // Increased Max to allow zooming out further
      pitchMin: -35,
      pitchMax: 25
    },
    initial: {
      x: -900,
      y: -900,
      z: -300,
      pitch: -15,
      yaw: 0
    }
  },
  images: IMAGES
} as const;

export type ConfigType = typeof NEXUS_CONFIG;
