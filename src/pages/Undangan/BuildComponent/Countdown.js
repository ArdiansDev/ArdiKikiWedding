import React, { useState, useEffect } from "react";
import UploadImage from "../../../components/UploadImage";
import Button from "react-bootstrap/Button";
import CountdownBuild from "../../../components/CountdownBuild";
import Drawer from "@material-ui/core/Drawer";
import SettingsIcon from "@material-ui/icons/Settings";
import fire from "./../../../fire";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import ImageUpload from "./../../../components/imgcrop/ImageUpload";
export default function Countdowns(props) {
  const [Waktu, setWaktu] = useState(props.data.Waktu);

  const [Akad, setAkad] = useState("");
  const [event, setEvent] = useState(props.data.event);
  const [Uid, setUid] = useState(props.uid.Uid);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const handleOnChange7 = (e) => {
    setEvent(new Date(e.target.value).toLocaleDateString("id-ID", options));
    setWaktu(e.target.value);
  };

  const createName = (e) => {
    handleDrawerClose();

    e.preventDefault();
    const nameRef = fire.database().ref(Uid).child("Undangan");
    const name = {
      Waktu,
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
        className="section3"
        style={{
          backgroundImage: `url(${props.images.Img11})`,
        }}
      >
        <Drawer open={open} onBackdropClick={handleDrawerClose}>
          <Button onClick={handleDrawerClose}>close</Button>
          <p>Backgroud Timer</p>
          <img
            src={props.images.Img11}
            style={{ maxWidth: "25vw", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img11" />
          <br />
          <TextField
            id="date"
            label="Waktu Pelaksanaan"
            type="date"
            defaultValue={props.data.Waktu}
            onChange={handleOnChange7}
            className="waktu"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <p>PS: Timer tidak aktif pada build mode</p>

          <Button onClick={createName}>Save</Button>
        </Drawer>
        <div>
          <h1>{props.data.event}</h1>
          <img
            height="200"
            src="https://wedew.id/themes/minimal/assets/images/save-the-date.gif"
            alt=""
          />

          <CountdownBuild />
        </div>
      </div>
    </div>
  );
}
