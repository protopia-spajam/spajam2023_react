import React, { useState } from "react";
import { Swiper } from "components/swiper"; // Swiper コンポーネントのパスを適切に指定してください
import { Text, TextSizes } from "ui/atoms/text";
import { LeadButton } from "ui/molecules/lead-button";
import FlatDesign from "assets/image/flat.svg";
import { Camera } from "components/camera"; // Camera コンポーネントのパスを適切に指定してください
import "./index.scss";
// import TextInput from "ui/atoms/input";
import { useNavigate } from "react-router-dom";
import Color from "color-thief-react";
import { TextForm } from "ui/molecules/text-form";

export const MyBottle: React.FC = () => {
  return (
    <div className="MyBottle">
      <Swiper pages={[<CaptureBottleImage />]} />
    </div>
  );
};

const CaptureBottleImage: React.FC = () => {
  const [numberDisplayPage, setNumberDisplayPage] = useState<number>(1);
  const [url, setUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [predominantColor, setPredominantColor] = useState<string>("");
  const navigation = useNavigate();
  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
    setNumberDisplayPage(3); // ページを 3 に切り替える
  };
  const [nickname, setNickname] = useState("");

  switch (numberDisplayPage) {
    case 1:
      return (
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
              setNumberDisplayPage(2); // ページを 2 に切り替える
            }}
          />
        </>
      );
    case 2:
      return (
        <>
          <div className="my-bottle-comment">マイボトルを撮影してください</div>
          <Camera handleImageAdd={handleUrlChange} />
        </>
      );
    case 3:
      return (
        <>
          {/* <TextInput
            value={name}
            onChange={(newValue) => setName(newValue)}
            label={""}
          /> */}
          <TextForm
            type="text"
            value={nickname}
            placeholder="ニックネームを入力してください"
            onChange={setNickname}
          />
          <LeadButton value={"次へ"} onClick={() => navigation(`/`)} />
          <Color src={url} format="hex">
            {({ data, loading, error }) => {
              if (data) {
                setPredominantColor(data);
              }
              return <div style={{ color: predominantColor }}></div>;
            }}
          </Color>
        </>
      );
    default:
      return null;
  }
};
