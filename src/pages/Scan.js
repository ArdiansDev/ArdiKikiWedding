import React, { useState } from "react";
import QrReader from "react-qr-reader";

export default function Scanner() {
  const [scanResultWebCam, setscanResultWebCam] = useState("");
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setscanResultWebCam(result);
    }
  };
  return (
    <div>
      <QrReader
        delay={300}
        style={{ width: "300px" }}
        onScan={handleScanWebCam}
        onError={handleErrorWebCam}
      />
      <h3>{scanResultWebCam}</h3>
    </div>
  );
}
