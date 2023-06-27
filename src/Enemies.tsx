import { useState } from "react";
import { Ball } from "./Ball";
import { stage, random, Battlefield } from "./Global";

const INITIAL_BATTLEFIELD = new Battlefield(stage.width, stage.height);

const INITIAL_STATE = (count: number) =>
  [...Array(count)].map((_, i) => ({
    id: i.toString(),
    x: random(INITIAL_BATTLEFIELD.x1, INITIAL_BATTLEFIELD.x2),
    y: random(INITIAL_BATTLEFIELD.y1, INITIAL_BATTLEFIELD.y2),
    rotation: Math.random() * 180,
    isDragging: false
  }));

export const Enemies: React.FC<{
  color: string;
  radius: number;
  headcount: number;
  oppositeX: number;
  oppositeY: number;
  oppositeRadius: number;
}> = ({ color, radius, headcount, oppositeX, oppositeY, oppositeRadius }) => {
  const initialEnemies = INITIAL_STATE(headcount);
  const [enemies, setEnemies] = useState(initialEnemies);

  return (
    <>
      {enemies.map((_) => {
        return (
          <Ball
            key={_.id}
            oppositeX={oppositeX}
            oppositeY={oppositeY}
            oppositeRadius={oppositeRadius}
            radius={radius}
            x={_.x}
            y={_.y}
            seekRadius={40}
            color={color}
          />
        );
      })}
    </>
  );
};
