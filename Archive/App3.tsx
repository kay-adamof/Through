import React, { useEffect, useState } from "react";
import { Stage, Layer, Circle } from "react-konva";

let animationId: number | null = null;
let initialX: number = 10;

export default function App() {
  const [x, setX] = useState(initialX);
  const [isActivate, setIsActivate] = useState(true);

  function handleMoveRight() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setX((prevX) => prevX + 1);
      animationId = requestAnimationFrame(loop);
    }
    if (isActivate) {
      animationId = requestAnimationFrame(loop);
    } else {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  }

  function handleResetPosition() {
    setX(initialX);
    setIsActivate(true);
  }

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight / 2}
        style={{ border: "1px solid black" }}
      >
        <Layer>
          <Circle x={x} y={10} radius={5} fill="black" />
        </Layer>
      </Stage>
      <nav>
        <button onClick={handleMoveRight}>{"=>"}</button>
        <button onClick={handleResetPosition}>reset</button>
      </nav>
    </>
  );
}
