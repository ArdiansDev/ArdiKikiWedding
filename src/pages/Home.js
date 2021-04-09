import React, { useState, useEffect } from "react";
import fire from "../fire";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Button from "@material-ui/core/Button";
export default function Home() {
  const [Name, setName] = useState([]);
  const handle = useFullScreenHandle();
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
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameRef = fire.database().ref(user.uid).child("Name");
        nameRef.on("value", (snapshot) => {
          const names = snapshot.val();
          const nameList = [];
          for (let id in names) {
            nameList.push({ id, ...names[id] });
          }
          const List = [...nameList].reverse();
          const Sort = List.sort((a, b) => b.time - a.time);
          setName(Sort[0].title);
          // sort((a, b) => a.time - b.time)
          // console.log(List.sort((a, b) => a.time - b.time));
          //   setFilteredhadir(List);
        });
      } else {
      }
    });
  }, []);

  return (
    <div className="Home">
      <FullScreen handle={handle}>
        <h1>Selamat datang</h1>

        <h2>{Name}</h2>
      </FullScreen>

      <Button onClick={handle.enter} size="large">
        <AspectRatioIcon className="FullScreenIcon" />
        Enter fullscreen
      </Button>
    </div>
  );
}
