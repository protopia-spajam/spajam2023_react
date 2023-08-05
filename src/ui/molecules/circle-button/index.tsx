import classNames from "classnames";
import { ArrowRight, Camera, Edit2, Send, Trash2 } from "react-feather";
// import { ToolTip } from "ui/atoms/tooltip";

import "./index.scss";

export const CircleButton = ({
  type,
  onClick,
  className,
  tooltip,
}: {
  type: circleButtonType;
  onClick: () => void;
  className?: string;
  tooltip?: string;
}) => {
  const classes = classNames(["CircleButton", className]);
  const tooltipComment = !!tooltip
    ? tooltip
    : type === circleButton.edit
    ? "編集"
    : type === circleButton.trash
    ? "削除"
    : undefined;
  return !!tooltipComment ? (
    // <ToolTip title={tooltipComment}>
    //   <button className={classes} onClick={onClick}>
    //     {type}
    //   </button>
    // </ToolTip>
    <></>
  ) : (
    <button className={classes} onClick={onClick}>
      {type}
    </button>
  );
};

export type circleButtonType = (typeof circleButton)[keyof typeof circleButton];
export const circleButton = {
  edit: <Edit2 />,
  trash: <Trash2 />,
  arrow: <ArrowRight />,
  send: <Send />,
  camera: <Camera />,
};
