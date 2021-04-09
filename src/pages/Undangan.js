import React, { useState, useEffect } from "react";
import Countdown from "../components/Countdown";
import fire from "../fire";
import CommentForm from "../components/CommentForm";
import Button from "react-bootstrap/Button";
import QRCode from "qrcode";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";

export default function Undangan(props) {
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  // const nameid = props.match.params.id;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);
  const [nameid, setNameid] = useState("Tamu");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const history = useHistory();
  const [QR, setQR] = useState("");
  const [data, setData] = useState(false);
  const [Name, setName] = useState([]);
  // console.log(CommentForm);
  // detail acara
  const [NamaPa, setNamaPa] = useState();
  const [NamaPi, setNamaPi] = useState();
  const [NamaPaLkp, setNamaPaLkp] = useState();
  const [NamaPiLkp, setNamaPiLkp] = useState();
  const [OrtuPa, setOrtuPa] = useState();
  const [OrtuPi, setOrtuPi] = useState();
  const [Waktu, setWaktu] = useState("2021-04-02");
  const [event, setEvent] = useState();
  const [Akad, setAkad] = useState();
  const [Resepsi1, setResepsi1] = useState();
  const [Resepsi2, setResepsi2] = useState();
  const [Resepsi3, setResepsi3] = useState();
  const [Resepsi1End, setResepsi1End] = useState("");
  const [Resepsi2End, setResepsi2End] = useState("");
  const [Resepsi3End, setResepsi3End] = useState("");
  const [NamaVenue, setNamaVenue] = useState();
  const [AlamatVenue, setAlamatVenue] = useState();
  const [LinkMaps, setLinkMaps] = useState();

  //  gambar
  const [Img0, setImg0] = useState();
  const [Img1, setImg1] = useState();
  const [Img2, setImg2] = useState();
  const [Img3, setImg3] = useState();
  const [Img4, setImg4] = useState();
  const [Img5, setImg5] = useState();
  const [Img6, setImg6] = useState();
  const [Img7, setImg7] = useState();
  const [Img8, setImg8] = useState();
  const [Img9, setImg9] = useState();
  const [Img10, setImg10] = useState();
  const [Img11, setImg11] = useState();
  //music
  const [Music, setMusic] = useState();

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

  const Idnaming = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        fire
          .database()
          .ref(user.uid)
          .child("Name")
          .once("value", function (snapshot) {
            if (snapshot.hasChild(props.match.params.id)) {
              setNameid(props.match.params.id);
            } else {
              history.push({
                pathname: `/404/`,
              });
            }
          });
      } else {
      }
    });
  };

  const Hadir = () => {
    if (!props.match.params.id) {
      alert("anda tidak terdaftar");
    } else {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          const nameRef = fire
            .database()
            .ref(user.uid)
            .child("Name")
            .child(nameid);
          nameRef.update({
            hadir: !data.hadir,
          });
        } else {
        }
      });
    }
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
            // setName(names.title);
          }
        });
      } else {
      }
    });
  }, []);
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameRef = fire.database().ref(user.uid).child("images/daily");
        nameRef.on("value", (snapshot) => {
          const images = snapshot.val();

          if (images === null) {
            // setImg0("");
          } else {
            setImg0(images.Img0);
            setImg1(images.Img1);
            setImg2(images.Img2);
            setImg3(images.Img3);
            setImg4(images.Img4);
            setImg5(images.Img5);
            setImg6(images.Img6);
            setImg7(images.Img7);
            setImg8(images.Img8);
            setImg9(images.Img9);
            setImg10(images.Img10);
            setImg11(images.Img11);

            // setName(names.title);
          }
        });
      } else {
      }
    });
  }, []);
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameRef = fire.database().ref(user.uid).child("music");
        nameRef.on("value", (snapshot) => {
          const music = snapshot.val();

          if (music === null) {
          } else {
            setMusic(music.music);
          }
        });
      } else {
      }
    });
  }, []);
  const audio = new Audio(Music);
  const playMusic = () => {
    audio.play();
    handleClose1();
  };

  useEffect(() => {
    if (!props.match.params.id) {
    } else {
      Idnaming();
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          const nameRef = fire
            .database()
            .ref(user.uid)
            .child("Name/" + nameid);
          nameRef.on("value", (snapshot) => {
            const names = snapshot.val();

            if (names === null) {
              setName("");
            } else {
              setData(names);
              setName(names.title);
            }
          });
        } else {
        }
      });
    }
  }, [nameid, Waktu]);

  useEffect(() => {
    async function fetchdata() {
      const response = await QRCode.toDataURL(nameid);

      setQR(response);
    }
    fetchdata();
  }, [nameid]);

  return (
    <div>
      {/* <img onClick={handleShow1} src={QR} alt="" /> */}
      <Modal
        // size="s"
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
        show={show1}
        onHide={handleClose1}
      >
        {/* <Modal.Body> */}

        <div
          className="coverdepan"
          style={{
            backgroundImage: `url(${Img0})`,
          }}
        >
          <h2>Dear </h2>
          <h1>{Name}</h1>
          <h4>Plus One</h4>
          <br />
          <h3>You are invited </h3>
          <h4>The wedding of </h4>
          <h2>
            {NamaPa} & {NamaPi}
          </h2>

          <Button variant="info" onClick={playMusic}>
            Open Invitation
          </Button>
          <br />
          <br />
          <br />
          <p>
            WeddingKik by:<a href="https://www.w3schools.com">(ardiansy.dev)</a>
          </p>
        </div>
      </Modal>
      <div
        className="section1"
        style={{
          backgroundImage: `url(${Img1})`,
        }}
      >
        <div className="body">
          <img width="45vw" src={Img2} alt="" />
          <h1>
            {NamaPa} & {NamaPi}
          </h1>
          <h2>WEDDING</h2>
          <h3>{event}</h3>
        </div>
      </div>
      <div className="section2">
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
              <img src={Img3} alt="" />
              <h4>{NamaPiLkp}</h4>
              <p>Putri pertama dari </p>
              <p>{OrtuPi} </p>
            </div>
            <h1>&</h1>
            <div className="imgputra">
              <img src={Img4} alt="" />
              <h4>{NamaPaLkp}</h4>
              <p>Putra pertama dari </p>
              <p>{OrtuPa}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section3"
        style={{
          backgroundImage: `url(${Img11})`,
        }}
      >
        <div>
          <h1>{event}</h1>
          <img
            height="200"
            src="https://wedew.id/themes/minimal/assets/images/save-the-date.gif"
            alt=""
          />
          <Countdown />
        </div>
      </div>
      <div className="section4">
        <div>
          <h4>{new Date(Waktu).toLocaleDateString("id-ID", Weekday)}</h4>
          <div className="dd">
            <h1>{new Date(Waktu).toLocaleDateString("id-ID", Day)}</h1>
            <div className="mmyy">
              <h4>{new Date(Waktu).toLocaleDateString("id-ID", Month)}</h4>
              <h4>{new Date(Waktu).toLocaleDateString("id-ID", Year)}</h4>
            </div>
          </div>
        </div>

        <div className="date">
          <div>
            <h1>Akad Nikah</h1>
            <h2>{Akad}-End</h2>
          </div>

          <div>
            <h1>Resepsi 1</h1>
            <h2>
              {Resepsi1}-{Resepsi1End}
            </h2>
          </div>

          <div>
            <h1>Resepsi 2</h1>
            <h2>
              {Resepsi2}-{Resepsi2End}
            </h2>
          </div>

          <div>
            <h1>Resepsi 3</h1>
            <h2>
              {Resepsi3}-{Resepsi3End}
            </h2>
          </div>
        </div>
        <div className="lokasi">
          <h3>{NamaVenue}</h3>
          <p>{AlamatVenue}</p>
        </div>
        <div>
          <Button variant="primary">View Map</Button>
        </div>
      </div>

      <div className="section5">
        <div className="img-grid">
          <div className="img-wrap">
            <img src={Img5} alt="" />
          </div>
          <div className="img-wrap">
            <img src={Img6} alt="" />
          </div>
          <div className="img-wrap">
            <img src={Img7} alt="" />
          </div>
          <div className="img-wrap">
            <img src={Img8} alt="" />
          </div>
          <div className="img-wrap">
            <img src={Img9} alt="" />
          </div>
          <div className="img-wrap">
            <img src={Img10} alt="" />
          </div>
        </div>
      </div>

      <div className="section6">
        <h2>Panduan Acara</h2>
        <p>
          Sehubungan dengan kondisi pandemi COVID 19, kami sekeluarga
          menindaklanjuti peraturan mengenai pembatasan tamu undangan. Oleh
          karena itu, mohon untuk dapat mengikuti panduan acara sebagai berikut
          :
        </p>

        <div className="protap">
          <div className="protap-warp">
            <img src="./../img/2.svg" alt="" />
            <h4>Undangan ini hanya berlaku untuk 2 ORANG.</h4>
          </div>
          <div className="protap-warp">
            <img src="./../img/6.svg" alt="" />
            <h4>Mencuci tangan dengan sabun</h4>
          </div>
          <div className="protap-warp">
            <img src="./../img/1.svg" alt="" />
            <h4>Menggunakan Hand Sanitizer</h4>
          </div>
          <div className="protap-warp">
            <img src="./../img/3.svg" alt="" />
            <h4>Menggunakan Masker</h4>
          </div>
          <div className="protap-warp">
            <img src="./../img/4.svg" alt="" />
            <h4>Tidak bersentuhan</h4>
          </div>
          <div className="protap-warp">
            <img src="./../img/5.svg" alt="" />
            <h4>Menjaga jarak</h4>
          </div>
        </div>
      </div>
      <div className="section7">
        <div className={`${data.hadir ? "rsvp" : ""}`}>
          <h3>Apakah anda akan hadir</h3>
          <Button variant="warning" onClick={Hadir}>
            Konfirmasi
          </Button>
        </div>
        <div className={`${data.hadir ? "" : "rsvp"}`}>
          <h3>Terimakasih sudah melakukan konfirmasi</h3>
          <p>Tunjukan QR ini saat memasuki Lokasi</p>
          <img onClick={handleShow} src={QR} alt="" />
          <p>Tekan gambar untuk memperbesar</p>
          <Modal
            // size="s"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
          >
            <Modal.Body>
              <img src={QR} alt="" />
            </Modal.Body>
          </Modal>

          <Button variant="danger" onClick={Hadir}>
            Batalkan Konfirmasi
          </Button>
        </div>

        <br />
        <h3>Berikan Ucapan</h3>
        <CommentForm nama={Name} />
      </div>
    </div>
  );
}
