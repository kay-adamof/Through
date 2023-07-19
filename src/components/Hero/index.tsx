import React, { useEffect } from "react";
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
} as const;

export const Hero: React.FC<Pick<IHero, "x" | "y" | "setPos">> = (props) => {
  // const [pos, setPos] = useState({ x: 100, y: 100 });

  const loopCreater = (direction: keyof typeof arrowKeys) => {
    return useAnimationFrameLoop(() => {
      props.setPos((prevPos) => ({
        x: prevPos.x + arrowKeys[direction].x,
        y: prevPos.y + arrowKeys[direction].y,
      }));
    });
  };

  const createCrossMotion = (
    direction: keyof typeof arrowKeys,
    fn: (
      direction: keyof typeof arrowKeys
    ) => ReturnType<typeof useAnimationFrameLoop>
  ) => {
    const loop = fn(direction);
    useEffect(() => {
      function handleKeyDown(event: globalThis.KeyboardEvent) {
        if (event.code === arrowKeys[direction].keyCode) {
          loop.start();
        }
      }
      function handleKeyUp(event: globalThis.KeyboardEvent) {
        if (event.code === arrowKeys[direction].keyCode) {
          loop.stop();
        }
      }
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, [loop]);
  };
  createCrossMotion("right", loopCreater);
  createCrossMotion("left", loopCreater);
  createCrossMotion("up", loopCreater);
  createCrossMotion("down", loopCreater);

  return <Circle x={props.x} y={props.y} radius={10} fill="black" />;
};
