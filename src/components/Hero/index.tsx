import React, { useEffect, useState } from "react";
import { Circle } from "react-konva";
import { useAnimationFrameLoop } from "react-timing-hooks";

const createArrowKeys = (key: string, x: number, y: number) => ({
  keyCode: "key" + key,
  x: x,
  y: y,
});

const arrowKeys = {
  up: createArrowKeys("W", 0, -1),
  down: createArrowKeys("S", 0, 1),
  left: createArrowKeys("A", -1, 0),
  right: createArrowKeys("D", 1, 0),
};
const Hero = () => {
  const [pos, setPos] = useState({ x: 10, y: 10 });
  const { start, stop } = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x + 1,
      y: prevPos.y + 1,
    }));
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "KeyS") {
        start();
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.code === "KeyS") {
        stop();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [start, stop]);

  return <Circle x={pos.x} y={pos.y} radius={10} fill={"black"} />;
};

export default Hero;
