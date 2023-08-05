import React from "react";
import { Input } from "ui/atoms/input";

import "./index.scss";

export const TextForm = ({
  type,
  value,
  placeholder,
  onChange,
  readOnly = false,
  onKeyDown,
}: {
  type: TextAreaType;
  value: string;
  placeholder?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  readOnly?: boolean;
  onKeyDown?: () => void;
}) => {
  return !readOnly ? (
    <Input
      className={["TextForm"]}
      type={type}
      value={value}
      placeholder={placeholder || ""}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  ) : (
    <Input
      className={["TextForm readonly"]}
      type={type}
      value={value}
      placeholder={placeholder || ""}
      onChange={onChange}
      readOnly={true}
      onKeyDown={onKeyDown}
    />
  );
};

type TextAreaType = "text" | "email";
