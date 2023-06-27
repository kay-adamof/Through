import { Circle } from "react-konva";
import { useEffect, useRef, useState } from "react";

interface IHeroProps {
  color: string;
  x: number;
  y: number;
  radius: number;
  directions: {
    left: 0 | 1;
    right: 0 | 1;
    up: 0 | 1;
    down: 0 | 1;
  };
  initialVelocity: number;
}

export const Hero: React.FC<IHeroProps> = ({ color, x, y, radius }) => {
  //const [position, setPosition] = useState({ x: x, y: y });

  // useEffect(() => {
  //   const vx = (directions.right - directions.left) * initialVelocity;
  //   const vy = (directions.down - directions.up) * initialVelocity;

  //   const move = () => {
  //     setPosition((prevPosition) => ({
  //       x: prevPosition.x + vx,
  //       y: prevPosition.y + vy
  //     }));
  //     requestRef.current = requestAnimationFrame(move);
  //   };
  //   requestRef.current = requestAnimationFrame(move);

  //   return () => cancelAnimationFrame(requestRef.current);
  // }, [directions, initialVelocity]);

  return <Circle x={x} y={y} radius={radius} fill={color} />;
};
