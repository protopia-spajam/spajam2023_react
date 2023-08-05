import { Text, TextSizes } from "ui/atoms/text";
import { Title } from "ui/molecules/title";
import Tumbler from "assets/image/tumbler.svg";
import { MyBottleBatch } from "assets/image/mybottle";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

export const Home = () => {
  return (
    <div className="Home">
      <div className={"title-logo"}>My Bottle</div>
      <div className="profile-container">
        <MyBottleIcon />
        <div className="profile">
          <div>かたやま　ゆうや</div>
          <div>
            <span>15</span>
          </div>
          <div>collection</div>
        </div>
      </div>
      <MenuCard content="Collection" path="collection" className="collection" />
      <MenuCard
        content="Add Friend Bottle"
        path="bottle-add"
        className="bottle-add"
      />
      <MenuCard content="My Bottle ID" path="my-qr" className="my-qr" />
    </div>
  );
};

const MyBottleIcon = () => {
  return (
    <div className="MyBottleIcon">
      <MyBottleBatch />
      <img src={Tumbler} alt="Tumbler" />
    </div>
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
