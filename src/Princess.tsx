import { Circle } from "react-konva";
import { IStuffProps } from "./IStuff";

export const Princess: React.FC<IStuffProps> = ({ x, y, radius, color }) => (
  <Circle x={x} y={y} radius={radius} fill={color} />
);
