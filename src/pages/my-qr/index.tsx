import { Text } from "ui/atoms/text";
import QRCode from "qrcode.react";
import { TitleBar } from "ui/molecules/title-bar";
import "./index.scss";
import { Camera } from "components/camera";
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { LoadingCircle } from "ui/molecules/loading-circle";
import { Title } from "ui/molecules/title";

export const MyQR = () => {
  const qrText = "http://localhost:3000/";
  const [isOK, setIsOK] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user",
  };
  return (
    <div className="MyQR">
      <TitleBar content={"MY BOTTLE ID"} />
      {isLoading ? (
        <LoadingCircle />
      ) : !isOK ? (
        <div className="Camera">
          <div className="webcam">
            <Webcam
              audio={false}
              width={410}
              height={200}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <div
            className="capture-button"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setIsOK(true);
              }, 2000);
            }}
          >
            <div className="comment">マイボトルをスキャンしてください！</div>
            <div className="shutter"></div>
          </div>
        </div>
      ) : (
        <>
          <QRCode
            value={qrText}
            renderAs="svg"
            size={300}
            bgColor={"#c1ab96"}
            fgColor={"#401f1e"}
            className={"qr-code"}
          />
          <div className="comment2">あなたのマイボトルが認証されました</div>
        </>
      )}
    </div>
  );
};
