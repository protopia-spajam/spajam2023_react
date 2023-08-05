import classNames from "classnames";
import { LogOut, PenTool, Plus, Save, X } from "react-feather";
import "./index.scss";

export const TextButton = ({
  value,
  onClick,
  className,
  icon,
  isStatus = false,
  disable = false,
  type,
}: {
  value: string;
  onClick: () => void;
  className?: string;
  icon?: textButtonIconType;
  isStatus?: boolean;
  disable?: boolean;
  type?: textButtonType;
}) => {
  const classes = classNames([
    "TextButton",
    className,
    isStatus && "active",
    disable && "disable",
    !!!type ? "default" : type,
    !!icon && "icon",
  ]);
  return (
    <button className={classes} onClick={!disable ? onClick : () => {}}>
      {icon && <div className={"button-icon"}>{icon}</div>}
      {value}
    </button>
  );
};

export type textButtonType = (typeof textButton)[keyof typeof textButton];
export const textButton = {
  black: "black",
  white: "white",
};

export type textButtonIconType =
  (typeof textButtonIcon)[keyof typeof textButtonIcon];
export const textButtonIcon = {
  plus: <Plus color="grey" />,
  penTool: <PenTool color="grey" />,
  logOut: <LogOut color="grey" />,
  x: <X color="grey" />,
  save: <Save color="grey" />,
};
