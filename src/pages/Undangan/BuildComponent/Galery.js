import React, { useState } from "react";

import UploadImage from "../../../components/UploadImage";
import Button from "react-bootstrap/Button";
import Drawer from "@material-ui/core/Drawer";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Galery(props) {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        style={{
          position: "absolute",
          left: "10vw",
          zIndex: "5",
          opacity: "1",
        }}
        onClick={handleDrawerOpen}
      >
        <SettingsIcon />{" "}
      </Button>
      <div className="section5">
        <Drawer open={open} onBackdropClick={handleDrawerClose}>
          <Button onClick={handleDrawerClose}>close</Button>
          <p>Galery 1</p>
          <img
            src={props.images.Img5}
            style={{ maxWidth: "320px", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img5" />
          <br />
          <p>Galery 2</p>
          <img
            src={props.images.Img6}
            style={{ maxWidth: "320px", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img6" />
          <br />
          <p>Galery 3</p>
          <img
            src={props.images.Img7}
            style={{ maxWidth: "320px", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img7" />
          <br />
          <p>Galery 4</p>
          <img
            src={props.images.Img8}
            style={{ maxWidth: "320px", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img8" />
          <br />
          <p>Galery 5</p>
          <img
            src={props.images.Img9}
            style={{ maxWidth: "320px", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img9" />
          <br />
          <p>Galery 6</p>
          <img
            src={props.images.Img10}
            style={{ maxWidth: "320px", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img10" />
          <br />
        </Drawer>
        <h1>Galery</h1>
        <div className="img-grid">
          <div className="img-wrap">
            <img src={props.images.Img5} alt="" />
          </div>
          <div className="img-wrap">
            <img src={props.images.Img6} alt="" />
          </div>
          <div className="img-wrap">
            <img src={props.images.Img7} alt="" />
          </div>
          <div className="img-wrap">
            <img src={props.images.Img8} alt="" />
          </div>
          <div className="img-wrap">
            <img src={props.images.Img9} alt="" />
          </div>
          <div className="img-wrap">
            <img src={props.images.Img10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
