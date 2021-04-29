import React, { useState, useEffect } from "react";
import fire from "../../../fire";
import Button from "react-bootstrap/Button";
import QRCode from "qrcode";
import Modal from "react-bootstrap/Modal";
export default function Confirm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [QR, setQR] = useState("");
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
            .child(props.nameid.nameid);
          nameRef.update({
            hadir: !props.data.data.hadir,
          });
        } else {
        }
      });
    }
  };

  useEffect(() => {
    async function fetchdata() {
      const response = await QRCode.toDataURL(props.nameid.nameid);
      setQR(response);
    }
    fetchdata();
  }, [props.nameid]);
  return (
    <div className="section7">
      <div className={`${props.data.hadir ? "rsvp" : ""}`}>
        <h3>Apakah anda akan hadir</h3>
        <Button variant="warning" onClick={Hadir}>
          Konfirmasi
        </Button>
      </div>
      <div className={`${props.data.hadir ? "" : "rsvp"}`}>
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
    </div>
  );
}
