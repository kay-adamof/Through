import React, { useEffect, useState } from "react";
import { Circle } from "react-konva";
import { useAnimationFrameLoop } from "react-timing-hooks";

const radius = 10;
const color = "black";

const Hero = () => {
  const [pos, setPos] = useState({ x: 10, y: 10 });
  const { start } = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x + 0.1,
      y: prevPos.y + 0.1,
    }));
  });

  useEffect(() => {
    function handleConsole(event: WindowEventMap["keydown"]) {
      console.log(event.code);
    }
    window.addEventListener("keydown", handleConsole);
    return () => {
      window.removeEventListener("keydown", handleConsole);
    };
  }, []);

  return <Circle x={pos.x} y={pos.y} radius={radius} fill={color} />;
};

export default Hero;
