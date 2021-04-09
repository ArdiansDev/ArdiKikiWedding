import React, { useState, useEffect } from "react";

import fire from "./../fire";
import Button from "@material-ui/core/Button";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import UploadImage from "../components/UploadImage";
import UndanganBuild from "./UndanganBuild";
import SaveIcon from "@material-ui/icons/Save";
import UploadMusic from "../components/UploadMusic";
import Icon from "@material-ui/core/Icon";
export default function Build(props) {
  const [NamaPa, setNamaPa] = useState("");
  const [NamaPi, setNamaPi] = useState("");
  const [NamaPaLkp, setNamaPaLkp] = useState("");
  const [NamaPiLkp, setNamaPiLkp] = useState("");
  const [OrtuPa, setOrtuPa] = useState("");
  const [OrtuPi, setOrtuPi] = useState("");
  const [Waktu, setWaktu] = useState(new Date("03-27-2021"));
  const [event, setEvent] = useState("Jumat");
  const [Akad, setAkad] = useState("");
  const [Resepsi1, setResepsi1] = useState("");
  const [Resepsi2, setResepsi2] = useState("");
  const [Resepsi3, setResepsi3] = useState("");
  const [Resepsi1End, setResepsi1End] = useState("");
  const [Resepsi2End, setResepsi2End] = useState("");
  const [Resepsi3End, setResepsi3End] = useState("");
  const [NamaVenue, setNamaVenue] = useState([]);
  const [AlamatVenue, setAlamatVenue] = useState([]);
  const [LinkMaps, setLinkMaps] = useState([]);
  const [LinkUndangan, setLinkUndangan] = useState([]);
  const [Uid, setUid] = useState("");
  const history = useHistory();
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  const share = () => {
    history.push("/Share");
  };
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //   const event = Waktu;
  const handleOnChange1 = (e) => {
    setNamaPa(e.target.value);
    // console.log(event);
    // console.log(event.toLocaleDateString("id-ID", options));
    // console.log(Waktu);
  };
  const handleOnChange2 = (e) => {
    setNamaPi(e.target.value);
  };
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
  const handleOnChange7 = (e) => {
    setEvent(new Date(e.target.value).toLocaleDateString("id-ID", options));
    setWaktu(e.target.value);
  };
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

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameRef = fire.database().ref(user.uid).child("Undangan");
        nameRef.on("value", (snapshot) => {
          const title = snapshot.val();

          if (title === null) {
            // setImg0("");
          } else {
            setNamaPa(title.NamaPa);
            setNamaPi(title.NamaPi);
            setNamaPaLkp(title.NamaPaLkp);
            setNamaPiLkp(title.NamaPiLkp);
            setOrtuPa(title.OrtuPa);
            setOrtuPi(title.OrtuPi);
            setWaktu(title.Waktu);
            setAkad(title.Akad);
            setResepsi1(title.Resepsi1);
            setResepsi2(title.Resepsi2);
            setResepsi3(title.Resepsi3);
            setResepsi1End(title.Resepsi1End);
            setResepsi2End(title.Resepsi2End);
            setResepsi3End(title.Resepsi3End);
            setAlamatVenue(title.AlamatVenue);
            setNamaVenue(title.NamaVenue);
            setLinkMaps(title.LinkMaps);
            setEvent(
              new Date(title.Waktu).toLocaleDateString("id-ID", options)
            );
          }
        });
      } else {
      }
    });
  }, []);

  const createName = (e) => {
    e.preventDefault();
    const nameRef = fire.database().ref(Uid).child("Undangan");
    const name = {
      NamaPa,
      NamaPi,
      NamaPaLkp,
      NamaPiLkp,
      OrtuPa,
      OrtuPi,
      Waktu,
      Akad,
      Resepsi1,
      Resepsi1End,
      Resepsi2,
      Resepsi2End,
      Resepsi3,
      Resepsi3End,
      NamaVenue,
      AlamatVenue,
      LinkMaps,
      LinkUndangan: `${NamaPa}${NamaPi}`,
    };
    alert("berhasil disimpan");
    nameRef.set(name);
    // setNamaPa("");
    // setNamaPi("");
    // setNamaPaLkp("");
    // setNamaPiLkp("");
    // setOrtuPa("");
    // setOrtuPi("");
    // setNamaVenue("");
    // setAlamatVenue("");
    // setLinkMaps("");
  };

  return (
    <div className="countainer">
      <Row>
        <Col className="Build" sm={4}>
          {/* <div > */}
          <h1>Detail Undangan</h1>
          <form onSubmit={createName}>
            <TextField
              required
              style={{ width: "30vw" }}
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
              style={{ width: "30vw" }}
              onChange={handleOnChange2}
              id="standard-basic"
              className="waktu"
              label="Nama Mempelai Wanita"
            />
            <br />

            <TextField
              value={NamaPaLkp}
              style={{ width: "30vw" }}
              type="text"
              onChange={handleOnChange3}
              required
              className="waktu"
              label="Nama Lengkap Mempelai Pria"
              placeholder="Firstname Lastname"
            />
            <br />
            <TextField
              value={NamaPiLkp}
              style={{ width: "30vw" }}
              type="text"
              onChange={handleOnChange4}
              required
              className="waktu"
              label="Nama Lengkap Mempelai Wanita"
              placeholder="Firstname Lastname"
            />
            <br />
            <TextField
              value={OrtuPa}
              style={{ width: "30vw" }}
              type="text"
              onChange={handleOnChange5}
              required
              className="waktu"
              label="Nama orangtua Mempelai Pria"
              placeholder="Bapak example dan Ibu example"
            />
            <br />
            <TextField
              value={OrtuPi}
              style={{ width: "30vw" }}
              type="text"
              onChange={handleOnChange6}
              required
              className="waktu"
              label="Nama orangtua Mempelai Wanita"
              placeholder="Bapak example dan Ibu example"
            />
            <br />

            <br />
            <TextField
              id="date"
              label="Waktu Pelaksanaan"
              type="date"
              defaultValue="2021-05-24"
              onChange={handleOnChange7}
              className="waktu"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
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
            <TextField
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
            <br />
            <TextField
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
            <br />
            <TextField
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
            <br />

            <TextField
              value={NamaVenue}
              style={{ width: "30vw" }}
              type="text"
              onChange={handleOnChange12}
              required
              className="waktu"
              label="Nama Venue"
            />
            <br />
            <TextField
              value={AlamatVenue}
              style={{ width: "30vw" }}
              type="text"
              onChange={handleOnChange13}
              required
              className="waktu"
              label="Alamat Venue"
            />
            <br />
            <TextField
              value={LinkMaps}
              style={{ width: "30vw" }}
              type="text"
              onChange={handleOnChange14}
              required
              className="waktu"
              label="Link Maps"
            />
            <br />

            <br />
            <h4>Upload Gambar</h4>
            <br />
            <div className="imageUpload">
              <p>Background Sambutan</p>
              <UploadImage props="Img0" />
              <br />
              <p>Background 1</p>
              <UploadImage props="Img1" />
              <br />
              <p>Gambar 1</p>
              <UploadImage props="Img2" />
              <br />
              <p>Foto Mempelai Wanita</p>
              <UploadImage props="Img3" />
              <br />
              <p>Foto Mempelai Pria</p>
              <UploadImage props="Img4" />
              <br />
              <p>Background 2</p>
              <UploadImage props="Img11" />

              <br />
              <h4> Galery</h4>
              <br />

              <UploadImage props="Img5" />
              <UploadImage props="Img6" />
              <UploadImage props="Img7" />
              <UploadImage props="Img8" />
              <UploadImage props="Img9" />
              <UploadImage props="Img10" />
            </div>

            <br />

            <h4>Upload Music</h4>
            <UploadMusic props="music" />
            <br />
            <br />
            <Button
              type="submit"
              // onClick={createName}
              variant="contained"
              color="primary"
              size="small"
              // className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
            <br />
            <br />
            <br />
            <Button
              type="submit"
              onClick={share}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<Icon>send</Icon>}
            >
              Share
            </Button>
          </form>
        </Col>
        <Col sm={7}>
          <div className="BuildPreview">
            <UndanganBuild {...props} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
