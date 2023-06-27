import { useEffect, useRef, useState } from "react";
import { Circle } from "react-konva";

interface BallProps {
  oppositeX: number;
  oppositeY: number;
  oppositeRadius: number;
  radius: number;
  x: number;
  y: number;
  seekRadius: number;
  color: string;
}

export const Ball: React.FC<BallProps> = ({
  oppositeX,
  oppositeY,
  oppositeRadius,
  radius,
  x,
  y,
  seekRadius,
  color
}) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const requestRef = useRef<number>();

  useEffect(() => {
    const moveSelf = () => {
      const dx = position.x - oppositeX;
      const dy = position.y - oppositeY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < seekRadius - oppositeRadius - radius) {
        setPosition((prevState) => ({
          x: prevState.x - dx * 0.05,
          y: prevState.y - dy * 0.05
        }));
      }

      requestRef.current = requestAnimationFrame(moveSelf);
    };
    requestRef.current = requestAnimationFrame(moveSelf);

    return () => cancelAnimationFrame(requestRef.current);
  }, [position, seekRadius, oppositeX, oppositeY, oppositeRadius, radius]);

  return (
    <Circle x={position.x} y={position.y} stroke={color} radius={radius} />
  );
};
