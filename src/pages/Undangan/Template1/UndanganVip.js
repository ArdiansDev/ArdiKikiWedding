import React, { useState, useEffect } from "react";
import Countdown from "../../../components/Countdown";
import fire from "../../../fire";
// import CommentForm from "../../../components/CommentForm";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import bungadepan from "./../../../img/bungadepan.png";
import bgOpen from "./../../../img/bgOpen.png";
import bungaatas from "./../../../img/bungaatas.png";
import bungabawah from "./../../../img/bungabawah.png";
import Bismilah from "./../../../img/Bismilah.png";
import vec1 from "./../../../img/1.svg";
import vec2 from "./../../../img/2.svg";
import vec3 from "./../../../img/3.svg";
import vec4 from "./../../../img/4.svg";
import vec5 from "./../../../img/5.svg";
import vec6 from "./../../../img/6.svg";

export default function Undangan1(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // const nameid = props.match.params.id;
  const [show1, setShow1] = useState(true);
  const [nameid, setNameid] = useState("Tamu");

  const handleClose1 = () => setShow1(false);
  const history = useHistory();

  const [Name, setName] = useState([]);
  // console.log(props);
  // detail acara
  const NamaPa = "Ardi";
  const NamaPi = "Kiki";
  const NamaPaLkp = "Ardiansyah Parwanto, S.Ak";
  const NamaPiLkp = "Fatchiyah Rizky Nasabie, S.H";

  //music
  const [Music, setMusic] = useState();
  // "https://res.cloudinary.com/dcfr2achk/video/upload/v1621668081/NopalWdding/music_twztbt.mp3"
  // sesi

  const Idnaming = () => {
    fire
      .database()
      .ref("KMFwgvHGWeQjBy76SZCbLLE6Jy82")
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
  };

  const audio = new Audio(Music);
  const playMusic = () => {
    audio.play();
    handleClose1();
  };

  useEffect(() => {
    if (!props.match.params.id) {
    } else {
      Idnaming();

      const nameRef = fire
        .database()
        .ref("KMFwgvHGWeQjBy76SZCbLLE6Jy82")
        .child("Name/" + nameid);
      nameRef.on("value", (snapshot) => {
        const names = snapshot.val();

        if (names === null) {
          setName("");
        } else {
          // setData(names);
          setName(names.title);
        }
      });
    }
  }, [nameid]);

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
                  <h4>Kiki & Ardi</h4>
                </div>
                <div>
                  <h2>Dear </h2>
                  <h1>{Name}</h1>

                  <button className="button" onClick={playMusic}>
                    Open Invitation
                  </button>
                  <h1 style={{ fontSize: "13px" }}>
                    *Undangan ini berlaku untuk 1 orang
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div
        className="section2"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <div className="bgSection2">
          <div className="text">
            <img src={Bismilah} alt="" />
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
        <img src={bungaatas} alt="" />
        <div>
          <h1 data-aos="fade-up">{NamaPiLkp}</h1>
          <h2 data-aos="fade-up">
            Putri Pertama Bapak Fansuri Perbatasari, S.E., M.M
          </h2>
          <h2 data-aos="fade-up">& Ibu dr. Lana Unwanah</h2>
        </div>
        <h3 data-aos="zoom-in">&</h3>
        <div>
          <h1 data-aos="fade-down">{NamaPaLkp}</h1>
          <h2 data-aos="fade-down">
            Putra Pertama Bapak Azis Setyawan, A. Ptnh{" "}
          </h2>
          <h2 data-aos="fade-down">& Ibu Parmi, S.Pd</h2>
        </div>
        <img
          data-aos="fade-down"
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
        <div>
          <h3 data-aos="fade-up">Sabtu, 2 Oktober 2021</h3>
          <h3 data-aos="fade-up">08.00 - 12.00 WIB</h3>
          <h3 data-aos="fade-up">Bertempat di Grand Zuri Hotel</h3>
          <h3 data-aos="fade-up">Jl. P. Mangkubumi No.18</h3>
          <h3 data-aos="fade-up">Gowongan, Jetis, Yogyakarta</h3>
        </div>
        <img data-aos="zoom-in" height="111" src={bungadepan} alt="" />
        <div data-aos="zoom-in">
          <h4 data-aos="fade-up">COUNTING TO THE BIG DAYS</h4>
          <Countdown />
        </div>
        <div className="warning">
          <h1 data-aos="zoom-in">
            Mengingat situasi Pandemi Covid-19 dengan varian Delta yang masih
            masif serta demi kesehatan bersama, mohon maaf kami tidak
            menyediakan makanan & minuman selama acara berlangsung.
          </h1>
        </div>
      </div>

      <div
        className="section6"
        style={{
          backgroundImage: `url(${bgOpen})`,
        }}
      >
        <div className="protap">
          <h1 data-aos="fade-down">HEALTH PROTOCOL</h1>
          <div className="protap-warp">
            <img data-aos="fade-right" src={vec1} alt="" />
            <h4 data-aos="fade-left">
              Selalu mengenakan masker pada saat menghadiri acara.{" "}
            </h4>
          </div>
          <div className="protap-warp">
            <img data-aos="fade-right" src={vec2} alt="" />
            <h4 data-aos="fade-left">
              Mencuci tangan menggunakan air mengalir dengan sabun atau
              handsanitizer sebelum memasuki ruang acara.
            </h4>
          </div>
          <div className="protap-warp">
            <img data-aos="fade-right" src={vec3} alt="" />
            <h4 data-aos="fade-left">
              Periksa suhu saat memasuki ruang acara.
            </h4>
          </div>
          <div className="protap-warp">
            <img data-aos="fade-right" src={vec4} alt="" />
            <h4 data-aos="fade-left">
              Tidak berjabat tangan dengan mempelai & kedua orangtua mempelai.
            </h4>
          </div>
          <div className="protap-warp">
            <img data-aos="fade-right" src={vec5} alt="" />
            <h4 data-aos="fade-left">
              Saling menjaga jarak pada saat menghadiri acara.{" "}
            </h4>
          </div>
          <div className="protap-warp">
            <img data-aos="fade-right" src={vec6} alt="" />
            <h4 data-aos="fade-left">
              Tidak diperbolehkan membawa anak dengan usia di bawah 12 tahun.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
