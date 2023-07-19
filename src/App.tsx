import { Hero } from "./components/Hero";
import { Princess } from "./Princess";
import { stage } from "./Global";
import BattleField from "./components/BattleField";
import { Enemies } from "./components/Enemies";
import { useState } from "react";

export default function App() {
  const [pos, setPos] = useState<Pick<IHero, "x" | "y">>({ x: 100, y: 100 });

  return (
    <>
      <BattleField>
        <Hero x={pos.x} y={pos.y} setPos={setPos} />
        <Enemies headCount={10} oppositeX={pos.x} oppositeY={pos.y}/>
        <Princess
          x={stage.width - 40}
          y={stage.height - 40}
          radius={5}
          color={"pink"}
        />
      </BattleField>

      {/* <nav> */}
      {/*   <button onClick={handleResetPosition}>reset</button> */}
      {/* </nav> */}
    </>
  );
}
