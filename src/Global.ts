export const stage = {
  width: window.innerWidth,
  height: window.innerHeight / 2,
};
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export class Battlefield {
  dx: number;
  dy: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(stageWidth: number, stageHeight: number) {
    this.dx = stageWidth * 0.9;
    this.dy = stageHeight * 1.0;
    this.x1 = this.dx;
    this.y1 = this.dy;
    this.x2 = stageWidth - this.dx;
    this.y2 = stageHeight - this.dy;
  }
}
