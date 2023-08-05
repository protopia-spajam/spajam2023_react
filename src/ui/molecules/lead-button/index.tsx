import React, { ReactNode } from "react";

import "./index.scss";

import { Spinner } from "ui/atoms/spinner";

export const LeadButton = ({
  value,
  onClick,
  isLoading = false,
}: {
  value: string | ReactNode;
  onClick: () => void;
  isLoading?: boolean;
}) => {
  // enterキー押下イベントで呼び出したい
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.key === "Enter" && onClick();
  };
  return (
    <div
      className="LeadButton"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      {!isLoading ? value : <Spinner />}
    </div>
  );
};
