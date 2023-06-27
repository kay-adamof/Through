export interface IDirections {
  left: 0 | 1;
  right: 0 | 1;
  up: 0 | 1;
  down: 0 | 1;
}

export interface IDirection {
  direction: "left" | "right" | "up" | "down";
}

export interface IStuffProps {
  color: string;
  x: number;
  y: number;
  radius: number;
}
