import React, { useEffect, useRef, useState } from "react";
import { Hero } from "./components/Hero";
import { Princess } from "./Princess";
import { stage } from "./Global";
import BattleField from "./components/BattleField";


const HERO_POSITION = {
  x: 10,
  y: 10,
};

export default function App() {
  const [heroPosition, setHeroPosition] = useState(HERO_POSITION);

  const [isActivate, setIsActivate] = useState(true);
  const [directions, setDirections] = useState({
    left: 0,
    right: 0,
    up: 0,
    down: 0,
  });

  const requestRef = useRef<number | null>(null);

  function handleMove(direction: string) {
    setDirections({
      ...directions,
      [direction]: directions[direction] === 0 ? 1 : 0,
    });
  }
  useEffect(() => {
    const vx = (directions.right - directions.left) * 1;
    const vy = (directions.down - directions.up) * 1;
    //console.log(`37${vx}`)
    const move = () => {
      setHeroPosition((prevPosition) => ({
        x: prevPosition.x + vx,
        y: prevPosition.y + vy,
      }));

      requestRef.current = requestAnimationFrame(move);
    };

    requestRef.current = requestAnimationFrame(move);

    return () => cancelAnimationFrame(requestRef.current);
  }, [directions]);

  function handleResetPosition() {
    setHeroPosition(HERO_POSITION);

    setIsActivate(true);
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    }
  }

  return (
    <>
      <BattleField>
        <Hero/>
        <Princess
          x={stage.width - 40}
          y={stage.height - 40}
          radius={5}
          color={"pink"}
        />
      </BattleField>

      <nav>
        <button onClick={handleResetPosition}>reset</button>
      </nav>
    </>
  );
}
