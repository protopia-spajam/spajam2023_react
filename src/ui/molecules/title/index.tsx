import { ReactNode } from "react";
import "./index.scss";
import { Text, TextSizes } from "ui/atoms/text";

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div className="Title">
      <Text size={TextSizes.title}>{children}</Text>
    </div>
  );
};
