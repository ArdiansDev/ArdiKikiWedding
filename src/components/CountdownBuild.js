import React, { useEffect, useState } from "react";
import fire from "../fire";
import Countdown from "react-countdown";
import moment from "moment";
export default function CountdownBuild() {
  const [waktu, setWaktu] = useState(1600000);
  const [Akad, setAkad] = useState("");
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  useEffect(() => {
    async function fetchMyAPI() {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          const nameRef = fire.database().ref(user.uid).child("Undangan");
          nameRef.on("value", (snapshot) => {
            const title = snapshot.val();
            if (!title) {
            } else {
              setWaktu(
                moment(
                  `${title.Waktu} +${title.Akad}`,
                  "YYYY-MM-DD HH:mm"
                ).valueOf()
              );
              setAkad(title.Akad);
            }
          });
        } else {
        }
      });
    }

    fetchMyAPI();
  }, [waktu]);

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="Countdown">
          <div className="counter">
            <h4>{days}</h4>
            <h4>Hari</h4>
          </div>
          <div className="counter">
            <h4>{hours}</h4>
            <h4>Jam</h4>
          </div>
          <div className="counter">
            <h4>{minutes}</h4>
            <h4>Menit</h4>
          </div>
          <div className="counter">
            <h4>{seconds}</h4>
            <h4>Detik</h4>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown intervalDelay={1000} date={waktu} renderer={renderer} />
    </div>
  );
}
