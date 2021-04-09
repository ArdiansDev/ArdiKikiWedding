import React from "react";
import fire from "../fire";
import { useState } from "react";

import Button from "react-bootstrap/Button";

export default function Nama({ name }) {
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  const completeName = () => {
    const nameRef = fire.database().ref(Uid).child("Name").child(name.id);
    nameRef.update({
      hadir: !name.hadir,
      time: timestamp,
    });
  };
  const Hadir = () => {
    const nameRef = fire.database().ref(Uid).child("Name").child(name.id);
    nameRef.update({
      konfirmasi: !name.konfirmasi,
    });
  };

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

  return (
    <div>
      <div
        className={`${name.konfirmasi ? "konfirmasihadir" : "konfirmasi"} ${
          name.hadir ? "hadir" : ""
        }`}
        key={name.id}
      >
        <h4>{name.title}</h4>
        {/* <h>{name.time}</h> */}
        <div className="tombol">
          <Button onClick={completeName} variant="success">
            Hadir
          </Button>
          {""}
          <Button variant="warning" onClick={Hadir}>
            Konfirmasi
          </Button>
        </div>
      </div>
    </div>
  );
}
