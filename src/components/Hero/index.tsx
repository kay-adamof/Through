import React, { KeyboardEvent, useEffect, useState } from "react";
import { Circle } from "react-konva";
import { useAnimationFrameLoop } from "react-timing-hooks";

const createArrowKeys = (key: string, x: number, y: number) => ({
  keyCode: "Key" + key,
  x: x,
  y: y,
});

const arrowKeys = {
  up: createArrowKeys("W", 0, -1),
  down: createArrowKeys("S", 0, 1),
  left: createArrowKeys("A", -1, 0),
  right: createArrowKeys("D", 1, 0),
};

const initialDirection = { x: 0, y: 0 };

const Hero = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState(initialDirection);

  /// ==== loopRight
  const loopRight = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x + arrowKeys.right.x,
      y: prevPos.y + arrowKeys.right.y,
    }));
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === arrowKeys.right.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopRight.start();
      }
    }
    function handleKeyUp(event: KeyboardEvent) {
      if (event.code === arrowKeys.right.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopRight.stop();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [loopRight]);

  /// ==== loopLeft
  const loopLeft = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x + arrowKeys.left.x,
      y: prevPos.y + arrowKeys.left.y,
    }));
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === arrowKeys.left.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopLeft.start();
      }
    }
    function handleKeyUp(event: KeyboardEvent) {
      if (event.code === arrowKeys.left.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopLeft.stop();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [loopLeft]);

  /// ==== loopDown
  const loopDown = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x + arrowKeys.down.x,
      y: prevPos.y + arrowKeys.down.y,
    }));
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === arrowKeys.down.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopDown.start();
      }
    }
    function handleKeyUp(event: KeyboardEvent) {
      if (event.code === arrowKeys.down.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopDown.stop();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [loopDown]);

  /// ==== loopUp
  const loopUp = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x + arrowKeys.up.x,
      y: prevPos.y + arrowKeys.up.y,
    }));
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === arrowKeys.up.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopUp.start();
      }
    }
    function handleKeyUp(event: KeyboardEvent) {
      if (event.code === arrowKeys.up.keyCode) {
        event.preventDefault();
        event.stopPropagation();

        loopUp.stop();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [loopUp]);

  return <Circle x={pos.x} y={pos.y} radius={10} fill="black" />;
};

export default Hero;
