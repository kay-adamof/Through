import React, { useEffect, useState } from "react";
import { Circle } from "react-konva";
import { useAnimationFrameLoop } from "react-timing-hooks";

type orientation = "up" | "down" | "left" | "right";

const orientations: orientation[] = ["up", "down", "left", "right"];

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
} as const;

const Hero = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 });

  const loopCreater = (direction: keyof typeof arrowKeys) => {
    return useAnimationFrameLoop(() => {
      setPos((prevPos) => ({
        x: prevPos.x + arrowKeys[direction].x,
        y: prevPos.y + arrowKeys[direction].y,
      }));
    });
  };

  /// ==== Move to the right
  const loopRight = loopCreater("right");

  useEffect(() => {
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.right.keyCode) {
        loopRight.start();
      }
    }
    function handleKeyUp(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.right.keyCode) {
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

  /// ==== Move to the left
  const loopLeft = loopCreater("left");

  useEffect(() => {
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.left.keyCode) {
        loopLeft.start();
      }
    }
    function handleKeyUp(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.left.keyCode) {
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


  /// ==== Move to the up
  const loopUp = loopCreater("up");

  useEffect(() => {
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.up.keyCode) {
        loopUp.start();
      }
    }
    function handleKeyUp(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.up.keyCode) {
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

  /// ==== Move to the down
  const loopDown = loopCreater("down");

  useEffect(() => {
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.down.keyCode) {
        loopDown.start();
      }
    }
    function handleKeyUp(event: globalThis.KeyboardEvent) {
      if (event.code === arrowKeys.down.keyCode) {
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

  return <Circle x={pos.x} y={pos.y} radius={10} fill="black" />;
};

export default Hero;
