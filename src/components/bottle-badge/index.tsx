import { MyBottleBatch } from "assets/image/mybottle";
import Tumbler from "assets/image/tumbler.svg";
import "./index.scss";

export const BottleBadge = ({ color }: { color: string }) => {
  return (
    <div className="BottleBadge" style={{ background: color }}>
      <MyBottleBatch />
      <img src={Tumbler} alt="Tumbler" />
    </div>
  );
};
