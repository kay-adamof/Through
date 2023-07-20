import { stage, random, Battlefield } from "../../Global";
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

interface IEnemies extends IEnemy{
    headCount:number
  }

export const Enemies: React.FC<Pick<IEnemies, "headCount"|"oppositeX" | "oppositeY">> = (
  props
) => {
  const enemies = INITIAL_STATE(props.headCount);
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
