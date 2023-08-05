import { Swiper } from "components/swiper";
import "./index.scss";
import { Text, TextSizes } from "ui/atoms/text";
import { TextButton } from "ui/molecules/text-button";
import { LeadButton } from "ui/molecules/lead-button";
import { CircleButton, circleButton } from "ui/molecules/circle-button";
import FlatDesign from "assets/image/flat.svg";
import { Camera } from "components/camera";
import { useState } from "react";

export const MyBottle = () => {
  return (
    <div className="MyBottle">
      <Swiper pages={[<CaptureBottleImage />]} />
    </div>
  );
};

const CaptureBottleImage = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  return (
    <div className="ResistCard">
      {!isCaptureEnable ? (
        <>
          <img src={FlatDesign} alt="FlatDesign" />
          <Text size={TextSizes.title}>
            まずはあなたのマイボトルを
            <br />
            登録しましょう！
          </Text>
          <LeadButton
            value="マイボトルを撮影する"
            onClick={() => {
              setCaptureEnable(true);
            }}
          />
        </>
      ) : (
        <Camera />
      )}
    </div>
  );
};
