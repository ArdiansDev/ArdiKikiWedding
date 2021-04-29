import React, { useState, useEffect } from "react";
import fire from "../../../fire";
import CommentForm from "../../../components/CommentForm";
import Button from "react-bootstrap/Button";
import QRCode from "qrcode";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import Hero from "../BuildComponent/Hero";
import Greeting from "../BuildComponent/Greeting";
import Couple from "../BuildComponent/Couple";
import Countdowns from "../BuildComponent/Countdown";
import DateTime from "../BuildComponent/DateTime";
import Galery from "../BuildComponent/Galery";
import Panduan from "../BuildComponent/Panduan";

export default function UndanganBuild(props) {
  const [show, setShow] = useState(false);

  const [nameid, setNameid] = useState("Tamu");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const [QR, setQR] = useState("");
  const [data, setData] = useState(false);
  const [Name, setName] = useState([]);
  const [datafile, setDatafile] = useState([]);
  const [imagedata, setImagedata] = useState([]);

  //  gambar

  const [Uid, setUid] = useState("");

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

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
          } else {
            setDatafile(title);
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
          } else {
            setImagedata(images);
          }
        });
      } else {
      }
    });
  }, []);

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
  }, [nameid]);

  useEffect(() => {
    async function fetchdata() {
      const response = await QRCode.toDataURL(nameid);

      setQR(response);
    }
    fetchdata();
  }, [nameid]);

  return (
    <div>
      <Greeting data={datafile} images={imagedata} uid={Uid} />
      <Hero data={datafile} images={imagedata} uid={Uid} />
      <Couple data={datafile} images={imagedata} uid={Uid} />
      <Countdowns data={datafile} images={imagedata} uid={Uid} />
      <DateTime data={datafile} images={imagedata} uid={Uid} />
      <Galery data={datafile} images={imagedata} uid={Uid} />
      <Panduan data={datafile} images={imagedata} uid={Uid} />
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
