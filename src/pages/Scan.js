import React, { useState, useEffect, useRef } from "react";
import fire from "../fire";
import QrReader from "react-qr-reader";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
export default function Scanner() {
  const [scanResultWebCam, setscanResultWebCam] = useState("");
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setscanResultWebCam(result);
    }
  };
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  const scanner = useRef(null);
  const [scan, setScan] = useState(true);
  const [Nama, setNama] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  // const [Result, setResult] = useState("");
  const conditions = [".", "#", "$", "[", "]"];
  function contains(target, pattern) {
    var value = 0;
    pattern.forEach(function (word) {
      value = value + target.includes(word);
    });
    return value === 1;
  }
  let today = new Date();
  const hh = String(today.getHours());
  const mm = String(today.getMinutes());
  const ss = String(today.getSeconds());
  function makeTwoDigits(time) {
    const timeString = `${time}`;
    if (timeString.length === 2) return time;
    return `0${time}`;
  }
  const timestamp = `${makeTwoDigits(hh)}${makeTwoDigits(mm)}${makeTwoDigits(
    ss
  )}`;
  // console.log(contains(Result, conditions));

  const onSuccess = (e) => {
    setscanResultWebCam(e.data);
    setScan(false);
  };

  useEffect(() => {
    if (!scanResultWebCam) {
      //   alert('kosong');
    } else if (contains(scanResultWebCam, conditions)) {
      alert("QR  mengandung Link");
    } else {
      completeTodo();
    }
  }, [scanResultWebCam]);

  const update = () => {
    const todoRef = fire
      .database()
      .ref(Uid)
      .child("Name")
      .child(scanResultWebCam);
    todoRef.update({
      hadir: true,
      time: timestamp,
    });
  };

  const completeTodo = () => {
    fire
      .database()
      .ref(Uid)
      .child("Name")
      .once("value", function (snapshot) {
        if (snapshot.hasChild(scanResultWebCam)) {
          fire
            .database()
            .ref(Uid)
            .child("Name")
            .child(scanResultWebCam)
            .once("value", (snapshot) => {
              const Userdata = snapshot.val();
              if (Userdata.hadir == true) {
                setShow2(true);
              } else {
                update();
                HandleNama();
              }
            });
        } else alert("tidak terdaftar");
      });
  };

  const HandleNama = () => {
    fire
      .database()
      .ref(Uid)
      .child("Name")
      .child(scanResultWebCam)
      .once("value", (snapshot) => {
        const Userdata = snapshot.val();
        console.log(Userdata.title);
        setNama(Userdata.title);
        // alert(Userdata.title);
        setShow(true);
      });
  };

  return (
    <div className="Scanner">
      <QrReader
        delay={300}
        style={{ width: "300px" }}
        onScan={handleScanWebCam}
        onError={handleErrorWebCam}
      />

      <Alert
        style={{
          position: "absolute",
          zIndex: 2,
          alignItems: "center",
        }}
        show={show}
        variant="success"
      >
        <Alert.Heading>Data diterima</Alert.Heading>
        <p>{Nama}</p>

        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Tutup
          </Button>
        </div>
      </Alert>
      <Alert
        style={{
          position: "absolute",
          zIndex: 2,
          alignItems: "center",
        }}
        show={show2}
        variant="danger"
      >
        <Alert.Heading>Tamu sudah Hadir</Alert.Heading>

        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow2(false)} variant="outline-success">
            Tutup
          </Button>
        </div>
      </Alert>
      <br />
      <p>Hasil Scan Terakhir</p>
      <h3>{Nama}</h3>
    </div>
  );
}
