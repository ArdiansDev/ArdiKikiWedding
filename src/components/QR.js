import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
// import fire from "../fire";

// import Card from "react-bootstrap/Card";
export default function QR({ name }) {
  // console.log(name);
  const [QR, setQR] = useState("");
  // const [text, settext] = useState("");
  // console.log(QR);
  useEffect(() => {
    async function fetchdata() {
      const response = await QRCode.toDataURL(name.id);

      setQR(response);
    }
    fetchdata();
  }, [name.id]);
  return (
    <div className="QRCard">
      <div>
        <img src={QR} alt="" />
      </div>
      <div className="titleQR">
        <h1>{name.title}</h1>
      </div>
    </div>
  );
}

// <Card key={name.id}>
// <div className="card-horizontal">
//   <Card.Img width="3.5cm" variant="top" src={QR} />

//   <Card.Title>{name.title}</Card.Title>
// </div>
// </Card>
