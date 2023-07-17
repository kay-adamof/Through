import React, { useEffect, useRef, useState } from "react";
import { Hero } from "./components/Hero";
import { Princess } from "./Princess";
import { stage } from "./Global";
import BattleField from "./components/BattleField";


export default function App() {

  const [pos, setPos] = useState<Pick<IHero, "x" | "y">>({ x : 100, y : 100 });

  return (
    <>
      <BattleField>
        <Hero x={pos.x} y={pos.y} setPos={setPos}/>
        {/* <Enemy oppositeX={} /> */}
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
