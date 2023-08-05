import { Modal } from "ui/molecules/modal";
import "./index.scss";
import { BottleBadge } from "components/bottle-badge";
import { ReactNode, useState } from "react";

export const BadgeModal = ({
  isOpen,
  setIsOpen,
  color,
  img,
}: {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  color: string;
  img: ReactNode;
}) => {
  const [isToggle, setIsToggle] = useState(true);
  const handleClick = () => {
    isToggle ? setIsToggle(false) : setIsToggle(true);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="BadgeModal">
        <div
          className={isToggle ? "badge active" : "badge inActive"}
          onClick={handleClick}
        >
          <BottleBadge color={color} />
        </div>
        <div
          className={!isToggle ? "badge active" : "badge inActive"}
          onClick={handleClick}
        >
          <BottleBadge color={color} img={img} />
        </div>
        <div className="comment1">Katayama Yuya's Bottle</div>
        <div className="comment2">2022.11.3 ~</div>
      </div>
    </Modal>
  );
};
