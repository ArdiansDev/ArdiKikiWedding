import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import UploadMusic from "../../../components/UploadMusic";
import UploadImage from "../../../components/UploadImage";
import Button from "react-bootstrap/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import fire from "./../../../fire";

export default function Greeting(props) {
  const [Music, setMusic] = useState();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
  return (
    <div>
      <Button
        style={{
          position: "absolute",
          left: "10vw",
          zIndex: "5",
          opacity: "1",
        }}
        onClick={handleDrawerOpen}
      >
        <SettingsIcon />{" "}
      </Button>

      <div className="coverdepan">
        <Drawer open={open} onBackdropClick={handleDrawerClose}>
          <Button onClick={handleDrawerClose}>close</Button>
          <p>Background Sambutan</p>
          <img
            src={props.images.Img0}
            style={{ maxWidth: "320px", padding: "2vw" }}
            alt=""
          />
          <UploadImage props="Img0" />
          <br />
          <h4>Music</h4>
          <UploadMusic props="music" />
        </Drawer>

        <div
          style={{
            backgroundImage: `url(${props.images.Img0})`,
          }}
          className="GambarDepan"
        ></div>
        <div className="coverdepanText">
          <h2>Dear </h2>
          <h1>{props.data.Name}</h1>
          <h4>Plus One</h4>
          <br />
          <h3>You are invited </h3>
          <h4>The wedding of </h4>
          <h2>
            {props.data.NamaPa} & {props.data.NamaPi}
          </h2>

          <Button variant="info" onClick={props.data.playMusic}>
            Open Invitation
          </Button>
          <br />
          <br />
          <br />
          <p>
            WeddingKik by:<a href="https://www.ardians.dev">(ardians.dev)</a>
          </p>
        </div>
      </div>
    </div>
  );
}
