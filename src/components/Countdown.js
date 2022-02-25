import React, { useEffect, useState, useCallback } from "react";
import fire from "../fire";

import moment from "moment";
export default function Countdown(props) {
  const [timerdays, settimerdays] = useState();
  const [timerhours, settimerhours] = useState();
  const [timerminutes, settimerminutes] = useState();
  const [timerseconds, settimerseconds] = useState();
  // const [waktu, setWaktu] = useState("");
  const [Akad, setAkad] = useState("");
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  // const innerFunction = useCallback(() => {
  //   startimer();
  // }, [waktu]);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const nameRef = fire
  //       .database()
  //       .ref("KMFwgvHGWeQjBy76SZCbLLE6Jy82")
  //       .child("Undangan");
  //     nameRef.once("value", (snapshot) => {
  //       const title = snapshot.val();
  //       if (!title) {
  //       } else {
  //         setWaktu(
  //           moment(
  //             `${title.Waktu} +${title.Akad}`,
  //             "YYYY-MM-DD HH:mm"
  //           ).valueOf()
  //         );
  //         setAkad(title.Akad);
  //       }
  //     });
  //   }
  //   startimer();
  //   fetchMyAPI();
  // }, [waktu, Akad]);
  // const countDownDate = waktu;
  useEffect(() => {
    startimer();
  }, []);

  const waktu = moment(`2022-02-26 + 09:00}`, "YYYY-MM-DD HH:mm").valueOf();
  const startimer = () => {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = waktu - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
      } else {
        settimerdays(days);
        settimerhours(hours);
        settimerminutes(minutes);
        settimerseconds(seconds);
      }
    }, 1000);
  };
  // innerFunction();
  return (
    <div className="Countdown">
      <div className="counter">
        <h4>{timerdays}</h4>
        <h3>Day</h3>
      </div>
      <div className="counter">
        <h4>{timerhours}</h4>
        <h3>Hrs</h3>
      </div>
      <div className="counter">
        <h4>{timerminutes}</h4>
        <h3>Min</h3>
      </div>
      <div className="counter">
        <h4>{timerseconds}</h4>
        <h3>Sec</h3>
      </div>
    </div>
  );
}
