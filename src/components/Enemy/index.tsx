import { useEffect, useState } from "react";
import { Circle } from "react-konva";
import { useAnimationFrameLoop } from "react-timing-hooks";

export const Enemy: React.FC<
  Pick<IEnemy, "y" | "x" | "oppositeX" | "oppositeY">
> = (props) => {
  const [pos, setPos] = useState({ x: props.x, y: props.y });

  const dx = pos.x - props.oppositeX;
  const dy = pos.y - props.oppositeY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const loop = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x - dx * 0.05,
      y: prevPos.y - dy * 0.05,
    }));
  });

  const seekCondition = ():boolean => {
    return distance < 50 && distance > 0.1;
  };

  useEffect(() => {
    console.log(dx, dy, distance);
    if (seekCondition()) {
      loop.start();
    }
    return () => {
      loop.stop();
    };
  }, [seekCondition()]);

  return <Circle x={pos.x} y={pos.y} stroke={"black"} radius={20} />;
};
