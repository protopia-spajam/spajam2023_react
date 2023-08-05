import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router";
import "./index.scss";

export const TitleBar = ({ content }: { content: string }) => {
  const navigation = useNavigate();
  return (
    <div className="TitleBar">
      {content}
      <div
        onClick={() => {
          navigation("/");
        }}
      >
        <ChevronLeft color="white" size={40} />
      </div>
    </div>
  );
};
