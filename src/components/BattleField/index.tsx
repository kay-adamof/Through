import { Stage, Layer } from "react-konva";
import React, { ReactNode } from "react";

const BattleField = ({children}:{children:ReactNode}) => {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight / 2}
      style={{ border: "1px solid black" }}
    >
      <Layer>{children}</Layer>
    </Stage>
  );
};

export default BattleField;
