import { Text } from "ui/atoms/text";
import { Title } from "ui/molecules/title";
import Tumbler from "assets/image/tumbler.png";
import "./index.scss";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Home">
      <Title>My Bottle</Title>
      <MyBottleIcon />
      <MenuCard content="Collection" path="collection" />
      <MenuCard content="Add Friend Bottle" path="bottle-add" />
      <MenuCard content="My Bottle ID" path="my-qr" />
    </div>
  );
};

const MyBottleIcon = () => {
  return (
    <div className="MyBottleIcon">
      <img src={Tumbler} alt="Tumbler" />
    </div>
  );
};

const MenuCard = ({ content, path }: { content: string; path: string }) => {
  const navigation = useNavigate();
  return (
    <div
      className="MenuCard"
      onClick={() => {
        navigation(`/${path}`);
      }}
    >
      <Text size="title">{content}</Text>
    </div>
  );
};
