import React, { useState, useEffect } from "react";
import UploadImage from "../../../components/UploadImage";
import Button from "react-bootstrap/Button";
import Drawer from "@material-ui/core/Drawer";
import SettingsIcon from "@material-ui/icons/Settings";
import fire from "./../../../fire";
import TextField from "@material-ui/core/TextField";

export default function Hero(props) {
  const [NamaPa, setNamaPa] = useState(props.data.NamaPa);
  const [NamaPi, setNamaPi] = useState(props.data.NamaPi);

  const [Uid, setUid] = useState(props.uid.Uid);

  const handleOnChange1 = (e) => {
    setNamaPa(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setNamaPi(e.target.value);
  };

  const createName = (e) => {
    handleDrawerClose();
    e.preventDefault();
    const nameRef = fire.database().ref(Uid).child("Undangan");
    const name = {
      NamaPa,
      NamaPi,
    };
    alert("berhasil disimpan");
    nameRef.update(name);
  };

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
        }}
        onClick={handleDrawerOpen}
      >
        <SettingsIcon />{" "}
      </Button>
      <div
        className="section1"
        style={{
          backgroundImage: `url(${props.images.Img1})`,
        }}
      >
        <Drawer open={open} onBackdropClick={handleDrawerClose}>
          <Button onClick={handleDrawerClose}>close</Button>
          <p>Background</p>
          <img
            src={props.images.Img1}
            style={{ maxWidth: "25vw", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img1" />
          <br />
          <br />
          <p>Gambar Tengah</p>
          <img
            src={props.images.Img2}
            style={{ maxWidth: "25vw", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img2" />

          <TextField
            required
            style={{ margin: "10vh 4vw 2vh 2vw" }}
            onChange={handleOnChange1}
            className="waktu"
            id="standard-basic"
            value={NamaPa}
            label="Nama Mempelai Pria"
          />
          <br />
          <TextField
            required
            value={NamaPi}
            style={{ margin: "0vw 4vw 2vw 2vw" }}
            onChange={handleOnChange2}
            id="standard-basic"
            className="waktu"
            label="Nama Mempelai Wanita"
          />
          <br />

          <Button onClick={createName}>Save</Button>
        </Drawer>

        <div className="body">
          <img width="45vw" src={props.images.Img2} alt="" />
          <h1>
            {props.data.NamaPa} & {props.data.NamaPi}
          </h1>
          <h2>WEDDING</h2>
          <h3>{props.data.event}</h3>
        </div>
      </div>
    </div>
  );
}
