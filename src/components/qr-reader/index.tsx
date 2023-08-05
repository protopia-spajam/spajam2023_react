import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser"
import { Result } from '@zxing/library'
import React, { FC, useEffect, useRef, useState } from "react"

export const QrCodeReader: FC<{ onReadQRCode: (text: Result) => void }> = ({ onReadQRCode }) => {
  const controlsRef = useRef<IScannerControls | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const codeReader = new BrowserQRCodeReader();
    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current,
      (result, error, controls) => {
        if (error) {
          return;
        }
        if (result) {
          onReadQRCode(result);
        }
        controlsRef.current = controls;
      }
    );

    // クリーンアップ関数を追加
    return () => {
      if (!controlsRef.current) {
        
        return;
      }
      console.log(1)
      controlsRef.current.stop();
      //controlsRef.current = null;
    };
  }, [onReadQRCode]);

  return <video style={{ maxWidth: "100%", maxHeight: "100%", height: "100%" }} ref={videoRef} />;
};
