import { Text, TextSizes } from "ui/atoms/text";
import { Title } from "ui/molecules/title";
import Tumbler from "assets/image/tumbler.svg";
import { MyBottleBatch } from "assets/image/mybottle";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { BottleBadge } from "components/bottle-badge";
import { Modal } from "ui/molecules/modal";
import { useState } from "react";
import { BadgeModal } from "components/badge-modal";
import MyTumbler from "assets/image/mytumbler.png";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Home">
        <div className={"title-logo"}>My Bottle</div>
        <div
          className="profile-container"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <BottleBadge color={"#401f1e"} />
          <div className="profile">
            <div>Katayama Yuya</div>
            <div>
              <span>15</span>
            </div>
            <div>collection</div>
          </div>
        </div>
        <MenuCard
          content="Collection"
          path="collection"
          className="collection"
        />
        <MenuCard
          content="Add Friend Bottle"
          path="bottle-add"
          className="bottle-add"
        />
        <MenuCard content="My Bottle ID" path="my-qr" className="my-qr" />
      </div>
      <BadgeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        color={"#401f1e"}
        img={<img className="image" src={MyTumbler} alt="MyTumbler" />}
      />
    </>
  );
};

const MenuCard = ({
  content,
  path,
  className,
}: {
  content: string;
  path: string;
  className: string;
}) => {
  const navigation = useNavigate();
  const classes = classNames(["MenuCard", className]);
  return (
    <div
      className={classes}
      onClick={() => {
        navigation(`/${path}`);
      }}
    >
      <div className="content">{content}</div>
      <img src={Tumbler} alt="Tumbler" />
    </div>
  );
};
