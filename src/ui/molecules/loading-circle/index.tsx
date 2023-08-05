import "./index.scss";
import { Center } from "ui/atoms/center";
import { Loader } from "react-feather";

export const LoadingCircle = ({ size = 60 }: { size?: number }) => {
  return (
    <div className="LoadingCircle">
      <Center className="l-s-center">
        <Loader size={size} />
      </Center>
    </div>
  );
};
