import React from "react";

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

declare global {
  interface IStuff {
    x: number;
    y: number;
    color: string;
    radius: number;
  }
  interface IHero extends IStuff {
    setPos: React.Dispatch<React.SetStateAction<Pick<IStuff, "x" | "y">>>;
  }
  interface IEnemy extends IStuff {
    oppositeX: number;
    oppositeY: number;
    oppositeRadius: number;
    seekRadius: number;
  }
}
