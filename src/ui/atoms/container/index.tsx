import React, { ReactNode } from "react";
import classNames from "classnames";

import "./index.scss";

export const Container = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const classes = classNames("Container", className, !!onClick && "tapable");
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};
