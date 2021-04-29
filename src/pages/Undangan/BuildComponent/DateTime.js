import React, { useState, useEffect } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "react-bootstrap/Button";
import Drawer from "@material-ui/core/Drawer";
import SettingsIcon from "@material-ui/icons/Settings";
import fire from "./../../../fire";
import TextField from "@material-ui/core/TextField";
import ImageUpload from "./../../../components/imgcrop/ImageUpload";

export default function DateTime(props) {
  const [NamaPa, setNamaPa] = useState(props.data.NamaPa);
  const [NamaPi, setNamaPi] = useState(props.data.NamaPi);
  const [Akad, setAkad] = useState("");
  const [Resepsi1, setResepsi1] = useState("");
  const [Resepsi2, setResepsi2] = useState("");
  const [Resepsi3, setResepsi3] = useState("");
  const [Resepsi4, setResepsi4] = useState("");
  const [Resepsi1End, setResepsi1End] = useState("");
  const [Resepsi2End, setResepsi2End] = useState("");
  const [Resepsi3End, setResepsi3End] = useState("");
  const [Resepsi4End, setResepsi4End] = useState("");
  const [NamaVenue, setNamaVenue] = useState([]);
  const [AlamatVenue, setAlamatVenue] = useState([]);
  const [LinkMaps, setLinkMaps] = useState([]);
  const [LinkUndangan, setLinkUndangan] = useState([]);
  const [Uid, setUid] = useState(props.uid.Uid);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  const handleOnChange8 = (e) => {
    setAkad(e.target.value);
  };
  const handleOnChange9 = (e) => {
    setResepsi1(e.target.value);
  };
  const handleOnChange10 = (e) => {
    setResepsi2(e.target.value);
  };
  const handleOnChange11 = (e) => {
    setResepsi3(e.target.value);
  };
  const handleOnChange12 = (e) => {
    setNamaVenue(e.target.value);
  };
  const handleOnChange13 = (e) => {
    setAlamatVenue(e.target.value);
  };
  const handleOnChange14 = (e) => {
    setLinkMaps(e.target.value);
  };
  const handleOnChange15 = (e) => {
    setResepsi1End(e.target.value);
  };
  const handleOnChange16 = (e) => {
    setResepsi2End(e.target.value);
  };
  const handleOnChange17 = (e) => {
    setResepsi3End(e.target.value);
  };
  const handleOnChange18 = (e) => {
    setResepsi4(e.target.value);
  };
  const handleOnChange19 = (e) => {
    setResepsi4End(e.target.value);
  };

  const createName = (e) => {
    handleDrawerClose();
    e.preventDefault();
    const nameRef = fire.database().ref(Uid).child("Undangan");
    const name = {
      Akad,
      Resepsi1,
      Resepsi1End,
      Resepsi2,
      Resepsi2End,
      Resepsi3,
      Resepsi3End,
      Resepsi4,
      Resepsi4End,
      NamaVenue,
      AlamatVenue,
      LinkMaps,
      LinkUndangan: `${NamaPa}${NamaPi}`,
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
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const Weekday = {
    weekday: "long",
  };
  const Year = {
    year: "numeric",
  };
  const Month = {
    month: "long",
  };
  const Day = {
    day: "numeric",
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
      <div className="section4">
        <Drawer
          style={{ width: "50vw" }}
          open={open}
          onBackdropClick={handleDrawerClose}
        >
          <Button onClick={handleDrawerClose}>close</Button>
          <TextField
            style={{ margin: "0vh 2vw 0vh 2vw" }}
            required
            id="time"
            label="Akad"
            type="time"
            defaultValue={Akad}
            onChange={handleOnChange8}
            className="waktu"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <br />
          <div>
            <TextField
              style={{ margin: "0vh 2vw 2vh 2vw" }}
              required
              id="time"
              label="Resepsi1"
              type="time"
              defaultValue={Resepsi1}
              onChange={handleOnChange9}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              style={{ margin: "0vh 2vw 2vh 0vw" }}
              required
              id="time"
              label="End"
              type="time"
              defaultValue={Resepsi1End}
              onChange={handleOnChange15}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
          <br />
          <div>
            <TextField
              style={{ margin: "0vh 2vw 2vh 2vw" }}
              required
              id="time"
              label="Resepsi2"
              type="time"
              defaultValue={Resepsi2}
              onChange={handleOnChange10}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              style={{ margin: "0vh 2vw 2vh 0vw" }}
              required
              id="time"
              label="End"
              type="time"
              defaultValue={Resepsi2End}
              onChange={handleOnChange16}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
          <br />
          <div>
            <TextField
              style={{ margin: "0vh 2vw 2vh 2vw" }}
              required
              id="time"
              label="Resepsi3"
              type="time"
              defaultValue={Resepsi3}
              onChange={handleOnChange11}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              style={{ margin: "0vh 2vw 2vh 0vw" }}
              required
              id="time"
              label="End"
              type="time"
              defaultValue={Resepsi3End}
              onChange={handleOnChange17}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
          <br />
          <div>
            <TextField
              style={{ margin: "0vh 2vw 2vh 2vw" }}
              required
              id="time"
              label="Resepsi4"
              type="time"
              defaultValue={Resepsi4}
              onChange={handleOnChange18}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              style={{ margin: "0vh 2vw 2vh 0vw" }}
              required
              id="time"
              label="End"
              type="time"
              defaultValue={Resepsi4End}
              onChange={handleOnChange19}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
          <TextField
            style={{ margin: "0vh 2vw 2vh 2vw" }}
            value={NamaVenue}
            type="text"
            onChange={handleOnChange12}
            required
            className="waktu"
            label="Nama Venue"
          />
          <br />
          <TextField
            style={{ margin: "0vh 2vw 2vh 2vw" }}
            value={AlamatVenue}
            type="text"
            onChange={handleOnChange13}
            required
            className="waktu"
            label="Alamat Venue"
          />
          <br />
          <TextField
            style={{ margin: "0vh 2vw 2vh 2vw" }}
            value={LinkMaps}
            type="text"
            onChange={handleOnChange14}
            required
            className="waktu"
            label="Link Maps"
          />

          <Button onClick={createName}>Save</Button>
        </Drawer>
        <div>
          <h4>
            {new Date(props.data.Waktu).toLocaleDateString("id-ID", Weekday)}
          </h4>
          <div className="dd" style={{ alignItems: "center", display: "flex" }}>
            <h1>
              {new Date(props.data.Waktu).toLocaleDateString("id-ID", Day)}
            </h1>
            <div className="mmyy">
              <h4>
                {new Date(props.data.Waktu).toLocaleDateString("id-ID", Month)}
              </h4>
              <h4>
                {new Date(props.data.Waktu).toLocaleDateString("id-ID", Year)}
              </h4>
            </div>
          </div>
        </div>

        <div className="date">
          <div>
            <h1>Akad Nikah</h1>
            <h2>{props.data.Akad}-End</h2>
          </div>

          <div>
            <h1>Resepsi 1</h1>
            <h2>
              {props.data.Resepsi1}-{props.data.Resepsi1End}
            </h2>
          </div>

          <div>
            <h1>Resepsi 2</h1>
            <h2>
              {props.data.Resepsi2}-{props.data.Resepsi2End}
            </h2>
          </div>

          <div>
            <h1>Resepsi 3</h1>
            <h2>
              {props.data.Resepsi3}-{props.data.Resepsi3End}
            </h2>
          </div>
        </div>
        <div className="lokasi">
          <h3>{props.data.NamaVenue}</h3>
          <p>{props.data.AlamatVenue}</p>
        </div>
        <div>
          <Button variant="success">
            <LocationOnIcon />
            View Map
          </Button>
        </div>
      </div>
    </div>
  );
}
