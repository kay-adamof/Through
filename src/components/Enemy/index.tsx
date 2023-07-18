import { useEffect, useState } from "react";
import { Circle } from "react-konva";
import { useAnimationFrameLoop } from "react-timing-hooks";

declare global {
  interface IEnemyProps
    extends Pick<IEnemy, "y" | "x" | "oppositeX" | "oppositeY"> {}
}

export const Enemy: React.FC<
  IEnemyProps
> = (props) => {
  const [pos, setPos] = useState({ x: 200, y: 200 });

  const dx = pos.x - props.oppositeX;
  const dy = pos.y - props.oppositeY;
  const distance = Math.sqrt(dx * dx - dy * dy);

  const loop = useAnimationFrameLoop(() => {
    setPos((prevPos) => ({
      x: prevPos.x - dx * 0.05,
      y: prevPos.y - dy * 0.05,
    }));
  });

  useEffect(() => {
    if (distance < 30 && distance > 0.01) {
      loop.start();
    }
    return () => {
      loop.stop();
    };
  }, [distance]);

  return <Circle x={pos.x} y={pos.y} stroke={"black"} radius={20} />;
};
