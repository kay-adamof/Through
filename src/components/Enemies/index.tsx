import { stage, random, Battlefield } from "../../global";
import { Enemy } from "../../components/Enemy";

const INITIAL_BATTLEFIELD = new Battlefield(stage.width, stage.height);

const INITIAL_STATE: (
  count: number
) => { id: string; x: number; y: number }[] = (count) =>
  [...Array(count)].map((_, i) => ({
    id: i.toString(),
    x: random(INITIAL_BATTLEFIELD.x1, INITIAL_BATTLEFIELD.x2),
    y: random(INITIAL_BATTLEFIELD.y1, INITIAL_BATTLEFIELD.y2),
  }));

export const Enemies: React.FC<Pick<IEnemy, "oppositeX" | "oppositeY">> = (
  props
) => {
  const enemies = INITIAL_STATE(10);
  return (
    <>
      {enemies.map((enemy) => {
        return (
          <Enemy
            key={enemy.id}
            oppositeX={props.oppositeX}
            oppositeY={props.oppositeY}
            x={enemy.x}
            y={enemy.y}
          />
        );
      })}
    </>
  );
};
