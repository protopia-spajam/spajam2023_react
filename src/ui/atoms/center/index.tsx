import classNames from "classnames";
import { ReactNode } from "react";
import "./index.scss";

export const Center = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const classes = classNames(["content", className]);
  return (
    <div className="Center">
      <div className={classes}>{children}</div>
    </div>
  );
};
