import React, { useState, useEffect } from "react";
import UploadImage from "../../../components/UploadImage";
import Button from "react-bootstrap/Button";
import Drawer from "@material-ui/core/Drawer";
import SettingsIcon from "@material-ui/icons/Settings";
import fire from "./../../../fire";
import TextField from "@material-ui/core/TextField";
import ImageUpload from "./../../../components/imgcrop/ImageUpload";

export default function Couple(props) {
  const [NamaPaLkp, setNamaPaLkp] = useState(props.data.NamaPaLkp);
  const [NamaPiLkp, setNamaPiLkp] = useState(props.data.NamaPiLkp);
  const [OrtuPa, setOrtuPa] = useState(props.data.OrtuPa);
  const [OrtuPi, setOrtuPi] = useState(props.data.OrtuPi);
  const [Uid, setUid] = useState(props.uid.Uid);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  const handleOnChange3 = (e) => {
    setNamaPaLkp(e.target.value);
  };
  const handleOnChange4 = (e) => {
    setNamaPiLkp(e.target.value);
  };
  const handleOnChange5 = (e) => {
    setOrtuPa(e.target.value);
  };
  const handleOnChange6 = (e) => {
    setOrtuPi(e.target.value);
  };
  const createName = (e) => {
    handleDrawerClose();
    e.preventDefault();
    const nameRef = fire.database().ref(Uid).child("Undangan");
    const name = {
      NamaPaLkp,
      NamaPiLkp,
      OrtuPa,
      OrtuPi,
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
      <div className="section2">
        <Drawer open={open} onBackdropClick={handleDrawerClose}>
          <Button onClick={handleDrawerClose}>close</Button>
          <p>Foto Pengantin Wanita</p>
          <img
            src={props.images.Img3}
            style={{ maxWidth: "25vw", padding: "2vw" }}
            alt=""
          />
          <ImageUpload props="Img3" />
          <br />
          <br />
          <p>Foto Pengantin Pria</p>
          <img
            src={props.images.Img4}
            style={{ maxWidth: "25vw", padding: "2vw" }}
            alt=""
          />
          <ImageUpload props="Img4" />
          <TextField
            value={NamaPaLkp}
            style={{ margin: "10vh 4vw 2vh 2vw" }}
            type="text"
            onChange={handleOnChange3}
            required
            className="waktu"
            label="Nama Lengkap  Pria"
            placeholder="Firstname Lastname"
          />
          <br />
          <TextField
            value={NamaPiLkp}
            style={{ margin: "0vh 4vw 2vh 2vw" }}
            type="text"
            onChange={handleOnChange4}
            required
            className="waktu"
            label="Nama Lengkap  Wanita"
            placeholder="Firstname Lastname"
          />
          <br />
          <TextField
            value={OrtuPa}
            style={{ margin: "0vh 4vw 2vh 2vw" }}
            type="text"
            onChange={handleOnChange5}
            required
            className="waktu"
            label="Nama orangtua  Pria"
            placeholder="Bapak example dan Ibu example"
          />
          <br />
          <TextField
            value={OrtuPi}
            style={{ margin: "0vh 4vw 2vh 2vw" }}
            type="text"
            onChange={handleOnChange6}
            required
            className="waktu"
            label="Nama orangtua  Wanita"
            placeholder="Bapak example dan Ibu example"
          />
          <br />

          <Button onClick={createName}>Save</Button>
        </Drawer>
        <div>
          <h2>We are Getting Married</h2>
          <h3>
            Love is not just about finding the right person, but creating right
            relationship.
          </h3>
          <h3>
            {" "}
            It's not about how much love you have in the beginning, but how much
            love you built till the end.{" "}
          </h3>
          <h3>- Anonymous -</h3>
          <div className="layout2">
            <div className="imgputri">
              <img src={props.images.Img3} alt="" />
              <h4>{props.data.NamaPiLkp}</h4>
              <p>Putri kedua dari </p>
              <p>{props.data.OrtuPi} </p>
            </div>
            <h1>&</h1>
            <div className="imgputra">
              <img src={props.images.Img4} alt="" />
              <h4>{props.data.NamaPaLkp}</h4>
              <p>Putra pertama dari </p>
              <p>{props.data.OrtuPa}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
