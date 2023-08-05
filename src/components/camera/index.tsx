import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import "./index.scss";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

export const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);
  return (
    <div className="Camera">
      {!!!url ? (
        <>
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
          <div className="capture-button" onClick={capture}>
            <div className="shutter"></div>
          </div>
        </>
      ) : (
        <>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              削除
            </button>
          </div>
        </>
      )}
    </div>
  );
};
