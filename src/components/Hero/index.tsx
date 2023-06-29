import React, { useEffect, useState } from "react";
import { Circle } from "react-konva";
import { useAnimationFrame } from "react-timing-hooks";
// Move left while pressing "D"
// Move right while pressing "A"
// Move up while pressing "W"
// Move down while pressing "S"
// Hero has figure as Mario
// Hero has size

const radius = 10;
const color = "black";

const Hero = () => {
  const [pos, setPos] = useState({ x: 10, y: 10 });
  const { start, stop, isStopped } = useAnimationFrame(() => {
    setPos((prevPos) => ({
      x: prevPos.x + 0.1,
      y: prevPos.y + 0.1,
    }));
  });

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      event.key === "KeyD";
    });
  });
  return <Circle x={pos.x} y={pos.y} radius={radius} fill={color} />;
};

export default Hero;
