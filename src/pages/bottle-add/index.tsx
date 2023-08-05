import { Text } from "ui/atoms/text";
import { QrCodeReader } from "components/qr-reader";
import React, { FC, useEffect, useRef, useState } from "react";
import { Title } from "ui/molecules/title";
import { useNavigate } from "react-router-dom";
import { TitleBar } from "ui/molecules/title-bar";
import "./index.scss";

export const BottleAdd = () => {
  const [qrCodes, setQrCodes] = useState("");
  const [cameraActive, setCameraActive] = useState(true); // 追加: カメラの状態を管理
  const navigation = useNavigate();

  useEffect(() => {
    qrCodes !== "" && navigation(`/collection`);
  }, [qrCodes]);

  return (
    <div className="BottleAdd">
      <TitleBar content={"Add Friends Bottle"} />
      <div className="comment">
        {"QRコードを読み取って友達のボトルを集めよう"}
      </div>
      <QrCodeReader
        onReadQRCode={(result) => {
          const newQrCode = result.getText();
          if (newQrCode !== qrCodes) {
            setQrCodes(newQrCode);
          }
        }}
      />
      <div className="next">
        <div className="comment">QRを読み込んでください</div>
      </div>
    </div>
  );
};
