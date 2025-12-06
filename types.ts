export interface CameraState {
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
}

export interface Velocity {
  x: number;
  y: number;
  z: number;
}

export interface CardState {
  baseX: number;
  baseY: number;
  baseZ: number;
  tiltX: number;
  tiltY: number;
  amp: number; // Amplitude for float animation
  spd: number; // Speed for float animation
  ph: number; // Phase for float animation
  w: number;
  h: number;
  imgSrc: string;
  title: string;
}

export interface CardInstance {
  el: HTMLDivElement | null;
  state: CardState;
  index: number;
}