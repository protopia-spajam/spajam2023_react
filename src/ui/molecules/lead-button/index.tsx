import React, { ReactNode } from "react";

import "./index.scss";

import { Spinner } from "ui/atoms/spinner";
import classNames from "classnames";

export const LeadButton = ({
  value,
  onClick,
  isLoading = false,
  className,
}: {
  value: string | ReactNode;
  onClick: () => void;
  isLoading?: boolean;
  className?: string;
}) => {
  // enterキー押下イベントで呼び出したい
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.key === "Enter" && onClick();
  };
  const classes = classNames(["LeadButton", className]);
  return (
    <div
      className={classes}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      {!isLoading ? value : <Spinner />}
    </div>
  );
};
