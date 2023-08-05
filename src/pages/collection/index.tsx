import { Text, TextSizes } from "ui/atoms/text";
import "./index.scss";
import Tumbler from "assets/image/tumbler.svg";
import { Title } from "ui/molecules/title";
import { Grid } from "ui/atoms/grid";
import { BottleBadge } from "components/bottle-badge";
import { BadgeModal } from "components/badge-modal";
import { ReactNode, useState } from "react";
import Tumb1 from "assets/image/tumb1.png";
import Tumb2 from "assets/image/tumb2.png";
import Tumb3 from "assets/image/tumb3.png";
import Tumb4 from "assets/image/tumb4.png";
import Tumb5 from "assets/image/tumb5.png";
import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router";

export const Collection = () => {
  const navigation = useNavigate();
  const collection = [
    {
      name: "keito",
      color: "#B9903B",
      img: <img className="image" src={Tumb1} alt="Tumb1" />,
    },
    {
      name: "しの",
      color: "#326E97",
      img: <img className="image" src={Tumb2} alt="Tumb2" />,
    },
    {
      name: "あみでぃ",
      color: "#A5DDF3",
      img: <img className="image" src={Tumb3} alt="Tumb3" />,
    },
    {
      name: "nishi",
      color: "#CEDC47",
      img: <img className="image" src={Tumb4} alt="Tumb4" />,
    },
    {
      name: "うっちー",
      color: "#481306",
      img: <img className="image" src={Tumb5} alt="Tumb5" />,
    },
    {
      name: "加藤",
      color: "#db7093",
      img: <img className="image" src={Tumb1} alt="Tumb1" />,
    },
    {
      name: "りか",
      color: "#696969",
      img: <img className="image" src={Tumb1} alt="Tumb1" />,
    },
    {
      name: "タムタム",
      color: "#5f9ea0",
      img: <img className="image" src={Tumb1} alt="Tumb1" />,
    },
    {
      name: "justin",
      color: "#d2b48c",
      img: <img className="image" src={Tumb1} alt="Tumb1" />,
    },
  ];
  return (
    <div className="Collection">
      <div className="title">Collection</div>
      <div
        onClick={() => {
          navigation("/");
        }}
      >
        <ChevronLeft />
      </div>
      <Grid
        list={collection.map((col, index) => (
          <CollectionIcon
            key={index}
            name={col.name}
            color={col.color}
            img={col.img}
          />
        ))}
      />
    </div>
  );
};

const CollectionIcon = ({
  name,
  color,
  img,
}: {
  name: string;
  color: string;
  img: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="CollectionIcon"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <BottleBadge color={color} />
        <div className="name">{name}</div>
      </div>
      <BadgeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        color={color}
        img={img}
      />
    </>
  );
};
