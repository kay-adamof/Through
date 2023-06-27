import React, {
  Fragment,
  ReactComponentElement,
  useEffect,
  useState
} from "react";
import { Stage, Layer, Circle, Text } from "react-konva";

let animationId: number | null = null;
let initialX: number = 10;
let initialY: number = 10;
const stageWidth = window.innerWidth;
const stageHeight = window.innerHeight / 2;
interface HeroProps {
  x?: number;
  y?: number;
  radius?: number;
  fill?: string;
}

const INITIAL_STATE = () =>
  [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * stageWidth,
    y: Math.random() * stageHeight,
    rotation: Math.random() * 180,
    isDragging: false
  }));

function Enemies({ enemies }: { enemies: any[] }) {
  return (
    <>
      {enemies.map((_) => (
        <Fragment key={_.id}>
          <Circle id={_.id} x={_.x} y={_.y} radius={10} fill="red" />
          <Text x={_.x} y={_.y} text={_.id} fontSize={20} />
        </Fragment>
      ))}
    </>
  );
}
const Hero: React.FC<HeroProps> = ({
  x = 10,
  y = 10,
  radius = 5,
  fill = "black"
}) => (
  <>
    <Circle x={x} y={y} radius={radius} fill={fill} />
  </>
);

const Princess = ({
  x = stageWidth - 40,
  y = stageHeight - 40,
  radius = 5,
  fill = "pink"
}) => (
  <>
    <Circle x={x} y={y} radius={radius} fill={fill} />
  </>
);

export default function App() {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);
  const [enemies, setEnemies] = React.useState(INITIAL_STATE);
  const [isActivate, setIsActivate] = useState(true);

  function handleMoveRight() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setX((prevX) => prevX + 1);
      animationId = requestAnimationFrame(loop);
    }
    if (isActivate) {
      animationId = requestAnimationFrame(loop);
    } else {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  }

  function handleMoveLeft() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setX((prevX) => prevX - 1);
      animationId = requestAnimationFrame(loop);
    }
    if (isActivate) {
      animationId = requestAnimationFrame(loop);
    } else {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  }

  function handleMoveUp() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setY((prevY) => prevY - 1);
      animationId = requestAnimationFrame(loop);
    }
    if (isActivate) {
      animationId = requestAnimationFrame(loop);
    } else {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  }

  function handleMoveDown() {
    setIsActivate(isActivate ? false : true);
    function loop() {
      setY((prevY) => prevY + 1);
      animationId = requestAnimationFrame(loop);
    }
    if (isActivate) {
      animationId = requestAnimationFrame(loop);
    } else {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  }

  function handleResetPosition() {
    setX(initialX);
    setY(initialY);
    setIsActivate(true);
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  useEffect(() => {
    enemies.forEach((enemy) => {
      const dx = x - enemy.x;
      const dy = y - enemy.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 15) {
        handleResetPosition();
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      }
    });
  }, [x, y, enemies]);

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight / 2}
        style={{ border: "1px solid black" }}
      >
        <Layer>
          <Hero x={x} y={y} />
          <Princess />

          <Enemies enemies={enemies} />
        </Layer>
      </Stage>
      <nav>
        <button onClick={handleMoveLeft}>{"<"}</button>
        <button onClick={handleMoveUp}>{"^"}</button>
        <button onClick={handleMoveDown}>{"v"}</button>
        <button onClick={handleMoveRight}>{">"}</button>
        <button onClick={handleResetPosition}>reset</button>
      </nav>
    </>
  );
}
