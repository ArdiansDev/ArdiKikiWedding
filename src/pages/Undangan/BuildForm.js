import React from "react";
import UploadImage from "../../../components/UploadImage";
import Button from "react-bootstrap/Button";

export default function Hero(props) {
  return (
    <div
      className="section1"
      style={{
        backgroundImage: `url(${props.images.Img1})`,
      }}
    >
      <div className="body">
        <img width="45vw" src={props.images.Img2} alt="" />
        <h1>
          {props.data.NamaPa} & {props.data.NamaPi}
        </h1>
        <h2>WEDDING</h2>
        <h3>{props.data.event}</h3>
      </div>
    </div>
  );
}
