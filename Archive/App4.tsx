import React, { useEffect, useState } from "react";
import { Stage, Layer, Circle } from "react-konva";

let animationId: number | null = null;
let initialX: number = 10;
let initialY: number = 10;

export default function App() {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);
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

  function handleMoveLeft() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setX((prevX) => prevX - 1);
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

  function handleMoveUp() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setY((prevY) => prevY - 1);
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

  function handleMoveDown() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setY((prevY) => prevY + 1);
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
    setY(initialY);
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
          <Circle x={x} y={y} radius={5} fill="black" />
        </Layer>
      </Stage>
      <nav>
        <button onClick={handleMoveLeft}>{"<"}</button>
        <button onClick={handleMoveUp}>{"^"}</button>
        <button onClick={handleMoveDown}>{"v"}</button>
        <button onClick={handleMoveRight}>{">"}</button>
        <button onClick={handleResetPosition}>reset</button>
      </nav>
    </>
  );
}
