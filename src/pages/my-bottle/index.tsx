import { Swiper } from "components/swiper";
import "./index.scss";
import { Text } from "ui/atoms/text";

export const MyBottle = () => {
  const list = [0, 1, 2];
  return (
    <div className="MyBottle">
      <Swiper
        pages={list.map((card, index) => (
          <ResistCard key={index} id={card} />
        ))}
      />
    </div>
  );
};

const ResistCard = ({ id }: { id: number }) => {
  return <div className="ResistCard">{id}</div>;
};
