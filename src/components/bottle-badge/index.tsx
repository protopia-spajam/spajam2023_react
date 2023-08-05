import { MyBottleBatch } from "assets/image/mybottle";
import Tumbler from "assets/image/tumbler.svg";
import MyTumbler from "assets/image/mytumbler.jpg";
import "./index.scss";
import { ReactNode } from "react";

export const BottleBadge = ({
  color,
  img,
}: {
  color: string;
  img?: ReactNode;
}) => {
  return (
    <div className="BottleBadge" style={{ background: color }}>
      <MyBottleBatch />
      {img === undefined ? <img src={Tumbler} alt="Tumbler" /> : img}
    </div>
  );
};
