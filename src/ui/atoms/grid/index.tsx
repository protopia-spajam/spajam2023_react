import { ReactNode } from "react";
import "./index.scss";

export const Grid = ({ list }: { list: Array<ReactNode> }) => {
  return <div className="Grid">{list}</div>;
};
