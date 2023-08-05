import { Text } from "ui/atoms/text";
import { QrCodeReader } from "components/qr-reader";
import React, { FC, useEffect, useRef, useState } from "react";
import { Title } from "ui/molecules/title";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const BottleAdd = () => {
  const [qrCodes, setQrCodes] = useState("");
  const [cameraActive, setCameraActive] = useState(true); // 追加: カメラの状態を管理
  const navigation = useNavigate();

  return (
    <div className="BottleAdd">
      <div className="title">Add Friends Bottle</div>
      <div
        onClick={() => {
          navigation("/");
        }}
      ></div>
      <h2>{"QRコードを読み取って友達のボトルを集めよう"}</h2>
      <QrCodeReader
        onReadQRCode={(result) => {
          const newQrCode = result.getText();
          if (newQrCode !== qrCodes) {
            setQrCodes(newQrCode);
          }
        }}
      />
      <div className="next">
        {qrCodes !== "" ? (
          <button
            onClick={() => {
              navigation(`/collection`);
            }}
          >
            次へ
          </button>
        ) : (
          <p>QRを読み込んでください</p>
        )}
      </div>
    </div>
  );
};
