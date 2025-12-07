
export const NEXUS_CONFIG = {
  meta: {
    title: "NEXUS 3D",
    subtitle: "3D Space • Drag to Explore",
    version: "1.0.0"
  },
  grid: {
    cols: 7,
    rows: 4,
    spacing: { x: 500, y: 550, z: 600 },
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
      zMin: -6000,
      zMax: 4000,
      pitchMin: -35,
      pitchMax: 25
    },
    initial: {
      x: -900,
      y: -900,
      z: 800,
      pitch: -15,
      yaw: 0
    }
  },

} as const;

export type ConfigType = typeof NEXUS_CONFIG;
