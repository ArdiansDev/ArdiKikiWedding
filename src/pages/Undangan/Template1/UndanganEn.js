import React, { useState, useEffect } from "react";
import Countdown from "../../../components/Countdown";
// import fire from "../../../fire";
import CommentForm from "../../../components/CommentForm";
import Modal from "react-bootstrap/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
import bungadepan from "./../../../img/bungadepan.png";
import bgOpen from "./../../../img/bgOpen.png";
import bungaatas from "./../../../img/bungaatas.png";
import bungabawah from "./../../../img/bungabawah.png";
import Bismilah from "./../../../img/Bismilah.png";
import imgPa from "./../../../img/imgPa.png";
import imgPi from "./../../../img/imgPi.png";
import YouTube from "react-youtube";
import couple from "./../../../img/couple.png";
export default function UndanganEn(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // const nameid = props.match.params.id;
  const [show1, setShow1] = useState(true);

  const handleClose1 = () => setShow1(false);

  // detail acara
  // const NamaPa = "Ardi";
  // const NamaPi = "Kiki";
  const NamaPaLkp = "Didik Hadumi Setiaji";
  const NamaPiLkp = "Ishlah Hasanah Rohiman";

  //music
  const [Music, setMusic] = useState();
  // "https://res.cloudinary.com/dcfr2achk/video/upload/v1621668081/NopalWdding/music_twztbt.mp3"
  // sesi

  const audio = new Audio(Music);
  const playMusic = () => {
    audio.play();
    handleClose1();
  };
  const opts = {
    top: 0,
    left: 0,
    // bottom: 0,

    height: "100%",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <Modal show={show1} onHide={handleClose1}>
        <div className="Section0">
          <div className="coverdepan">
            <div
              style={{
                backgroundImage: `url(${bgOpen})`,
              }}
              className="GambarDepan"
            >
              <div className="coverdepanText">
                <div>
                  <img src={bungadepan} alt="" />
                  <h3>You are invited </h3>
                </div>
                <div>
                  <h1> to The wedding of </h1>
                  <h4>
                    Didik Hadumi Setiaji <br /> & <br /> Ishlah Hasanah Rohiman{" "}
                  </h4>
                </div>
                <div>
                  <button className="button" onClick={playMusic}>
                    Open Invitation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* <div
        className="section1"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <h3 data-aos="fade-up">SAVE THE DATE</h3>
        <img data-aos="fade-up" width="45vw" src={bungadepan} alt="" />
        <h2 data-aos="fade-up">The Wedding of</h2>
        <h1 data-aos="fade-up">
          {NamaPa} & {NamaPi}
        </h1>
        <br />
        <div>
          <h3 data-aos="fade-up">Sabtu, 2 Oktober 2021</h3>
          <h3 data-aos="fade-up">08.00 - 12.00 WIB</h3>
          <br />
        </div>
      </div> */}
      <div
        className="section2"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <div className="bgSection2">
          <div className="text">
            <img data-aos="fade-up" src={Bismilah} alt="" />
            <h3 data-aos="fade-up">
              “And one of His signs is that He created mates for you from
              yourselves that you may find rest in them, and He put between you
              love and compassion; most surely there are signs in this for a
              people who reflect.”
            </h3>

            <h3 data-aos="fade-up">- (Q.S Ar - Rum : 21) -</h3>
          </div>
        </div>
      </div>
      <div
        className="section3"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <img data-aos="fade-down" src={bungaatas} alt="" />
        <div>
          <img width="250px" data-aos="fade-up" src={couple} alt="" />

          <h1 data-aos="fade-up">
            {NamaPaLkp} <br /> & <br /> {NamaPiLkp}
          </h1>
          {/* <h2 data-aos="fade-up">
            The Daughter of Mr. Fansuri Perbatasari, S.E., M.M
          </h2>
          <h2 data-aos="fade-up">& Mrs. dr. Lana Unwanah</h2> */}
        </div>
        {/* <h3 data-aos="zoom-in">&</h3> */}
        <div>
          {/* <img width="250px" data-aos="fade-up" src={imgPa} alt="" /> */}

          {/* <h1 data-aos="fade-up">{NamaPaLkp}</h1> */}
          {/* <h2 data-aos="fade-up">The Son of Mr. Azis Setyawan, A. Ptnh </h2>
          <h2 data-aos="fade-up">& Mrs. Parmi, S.Pd</h2> */}
        </div>
        {/* <div >______</div> */}
      </div>
      <div
        className="section4"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <img data-aos="fade-up" className="bungaatas" src={bungaatas} alt="" />
        <div className="TimeLocation">
          <h3 data-aos="fade-up">Saturday, 26 Feb 2022 </h3>
          <h3 data-aos="fade-up">09.00 - 12.00 GMT+7</h3>
          <h3 data-aos="fade-up">Cianjur</h3>
        </div>

        {/* <div>
          <h2 data-aos="fade-up">VIRTUAL WEDDING</h2>
          <h1 data-aos="fade-up">
            Due to the pandemic, our wedding will be held virtually. The live
            streaming can be accessed via the following YouTube link:
          </h1>
        </div>
        <div
          className="Youtube"
          onClick={() => {
            window.open("https://www.w3schools.com");
          }}
        >
          <YouTube className="player" videoId="1rHm_uMceZU" opts={opts} />
        </div> */}
        <img data-aos="fade-up" height="111" src={bungadepan} alt="" />

        <div data-aos="fade-up">
          <h4 data-aos="fade-up">COUNTING TO THE BIG DAYS</h4>
          <Countdown />
        </div>
      </div>

      <div
        className="section7"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <img data-aos="fade-down" src={bungaatas} alt="" />
        <div className="bgComment">
          <h1 data-aos="fade-down">WISHES</h1>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
