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

import YouTube from "react-youtube";

export default function UndanganUmum(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // const nameid = props.match.params.id;
  const [show1, setShow1] = useState(true);

  const handleClose1 = () => setShow1(false);

  // detail acara
  const NamaPa = "Ardi";
  const NamaPi = "Kiki";
  const NamaPaLkp = "Ardiansyah Parwanto, S.Ak";
  const NamaPiLkp = "Fatchiyah Rizky Nasabie, S.H";

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
                  <h3>to</h3>
                  <h4>The wedding of </h4>
                </div>
                <h3>Kiki & Ardi</h3>
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
      <div
        className="section1"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        {/* <div className="body"> */}
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
      </div>
      <div
        className="section2"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <img data-aos="fade-down" className="bunga" src={bungaatas} alt="" />
        <div className="bgSection2">
          <div className="text">
            <img data-aos="fade-up" src={Bismilah} alt="" />
            <h3 data-aos="fade-up">
              “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan Nya
              untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat
              ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu.
              sesungguhnya yang demikian menjadi tanda- tanda kebesaran-Nya bagi
              orang-orang yang berfikir”
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
          <h1 data-aos="fade-up">{NamaPiLkp}</h1>
          <h2 data-aos="fade-up">
            Putri Pertama Bapak Fansuri Perbatasari, S.E., M.M
          </h2>
          <h2 data-aos="fade-up">& Ibu dr. Lana Unwanah</h2>
        </div>
        <h3 data-aos="zoom-in">&</h3>
        <div>
          <h1 data-aos="fade-up">{NamaPaLkp}</h1>
          <h2 data-aos="fade-up">
            Putra Pertama Bapak Azis Setyawan, A. Ptnh{" "}
          </h2>
          <h2 data-aos="fade-up">& Ibu Parmi, S.Pd</h2>
        </div>
        <img
          data-aos="fade-up"
          className="bungabawah"
          src={bungabawah}
          alt=""
        />
      </div>
      <div
        className="section4"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <div data-aos="fade-up">
          <h4 data-aos="fade-up">COUNTING TO THE BIG DAYS</h4>
          <Countdown />
        </div>
        <img data-aos="fade-up" height="111" src={bungadepan} alt="" />
        <div>
          <h2 data-aos="fade-up">VIRTUAL WEDDING</h2>
          <h1 data-aos="fade-up">
            Mengingat pandemi covid-19 tidak semua teman diperbolehkan
            menghadiri pernikahan kami, kami mempublikasikan pernikahan kami
            secara virtual melalui youtube live streaming.
          </h1>
        </div>
        <div className="Youtube">
          <YouTube className="player" videoId="1rHm_uMceZU" opts={opts} />
        </div>
        <div>
          <h2 data-aos="fade-up">Sabtu, 2 Oktober 2021</h2>
          <h2 data-aos="fade-up">09.00 WIB | Yogyakarta</h2>
          <br />
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
          <h3 data-aos="fade-down">WISHES</h3>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
