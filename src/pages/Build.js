import React, { useRef, useState, useEffect } from "react";
import ImageUpload from "./../components/imgcrop/ImageUpload";
import fire from "./../fire";
import Slider from "react-slick";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import UploadImage from "../components/UploadImage";
import UndanganBuild from "./Undangan/Template1/Build";
import SaveIcon from "@material-ui/icons/Save";
import UploadMusic from "../components/UploadMusic";
import Icon from "@material-ui/core/Icon";
export default function Build(props) {
  const [NamaPa, setNamaPa] = useState("");
  const [NamaPi, setNamaPi] = useState("");
  const [NamaPaLkp, setNamaPaLkp] = useState("");
  const [NamaPiLkp, setNamaPiLkp] = useState("");
  const [OrtuPa, setOrtuPa] = useState("");
  const [OrtuPi, setOrtuPi] = useState("");
  const [Waktu, setWaktu] = useState(new Date("03-27-2021"));
  const [event, setEvent] = useState("Jumat");
  const [Akad, setAkad] = useState("07:00");
  const [Resepsi1, setResepsi1] = useState("08:00");
  const [Resepsi2, setResepsi2] = useState("09:00");
  const [Resepsi3, setResepsi3] = useState("10:00");
  const [Resepsi4, setResepsi4] = useState("11:00");
  const [Resepsi1End, setResepsi1End] = useState("09:00");
  const [Resepsi2End, setResepsi2End] = useState("10:00");
  const [Resepsi3End, setResepsi3End] = useState("11:00");
  const [Resepsi4End, setResepsi4End] = useState("12:00");
  const [NamaVenue, setNamaVenue] = useState([]);
  const [AlamatVenue, setAlamatVenue] = useState([]);
  const [LinkMaps, setLinkMaps] = useState([]);
  const [LinkUndangan, setLinkUndangan] = useState([]);
  const [Uid, setUid] = useState("");
  const history = useHistory();
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  const share = () => {
    history.push("/Share");
  };
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //   const event = Waktu;
  const handleOnChange1 = (e) => {
    setNamaPa(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setNamaPi(e.target.value);
  };
  const handleOnChange3 = (e) => {
    setNamaPaLkp(e.target.value);
  };
  const handleOnChange4 = (e) => {
    setNamaPiLkp(e.target.value);
  };
  const handleOnChange5 = (e) => {
    setOrtuPa(e.target.value);
  };
  const handleOnChange6 = (e) => {
    setOrtuPi(e.target.value);
  };
  const handleOnChange7 = (e) => {
    setEvent(new Date(e.target.value).toLocaleDateString("id-ID", options));
    setWaktu(e.target.value);
  };
  const handleOnChange8 = (e) => {
    setAkad(e.target.value);
  };
  const handleOnChange9 = (e) => {
    setResepsi1(e.target.value);
  };
  const handleOnChange10 = (e) => {
    setResepsi2(e.target.value);
  };
  const handleOnChange11 = (e) => {
    setResepsi3(e.target.value);
  };
  const handleOnChange12 = (e) => {
    setNamaVenue(e.target.value);
  };
  const handleOnChange13 = (e) => {
    setAlamatVenue(e.target.value);
  };
  const handleOnChange14 = (e) => {
    setLinkMaps(e.target.value);
  };
  const handleOnChange15 = (e) => {
    setResepsi1End(e.target.value);
  };
  const handleOnChange16 = (e) => {
    setResepsi2End(e.target.value);
  };
  const handleOnChange17 = (e) => {
    setResepsi3End(e.target.value);
  };
  const handleOnChange18 = (e) => {
    setResepsi4(e.target.value);
  };
  const handleOnChange19 = (e) => {
    setResepsi4End(e.target.value);
  };

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameRef = fire.database().ref(user.uid).child("Undangan");
        nameRef.on("value", (snapshot) => {
          const title = snapshot.val();

          if (title === null) {
            // setImg0("");
          } else {
            setNamaPa(title.NamaPa);
            setNamaPi(title.NamaPi);
            setNamaPaLkp(title.NamaPaLkp);
            setNamaPiLkp(title.NamaPiLkp);
            setOrtuPa(title.OrtuPa);
            setOrtuPi(title.OrtuPi);
            setWaktu(title.Waktu);
            setAkad(title.Akad);
            setResepsi1(title.Resepsi1);
            setResepsi2(title.Resepsi2);
            setResepsi3(title.Resepsi3);
            setResepsi4(title.Resepsi4);
            setResepsi1End(title.Resepsi1End);
            setResepsi2End(title.Resepsi2End);
            setResepsi3End(title.Resepsi3End);
            setAlamatVenue(title.AlamatVenue);
            setNamaVenue(title.NamaVenue);
            setLinkMaps(title.LinkMaps);
            setEvent(
              new Date(title.Waktu).toLocaleDateString("id-ID", options)
            );
          }
        });
      } else {
      }
    });
  }, []);

  const createName = (e) => {
    e.preventDefault();
    const nameRef = fire.database().ref(Uid).child("Undangan");
    const name = {
      NamaPa,
      NamaPi,
      NamaPaLkp,
      NamaPiLkp,
      OrtuPa,
      OrtuPi,
      Waktu,
      Akad,
      Resepsi1,
      Resepsi1End,
      Resepsi2,
      Resepsi2End,
      Resepsi3,
      Resepsi3End,
      Resepsi4,
      Resepsi4End,
      NamaVenue,
      AlamatVenue,
      LinkMaps,
      LinkUndangan: `${NamaPa}${NamaPi}`,
    };
    alert("berhasil disimpan");
    nameRef.set(name);
  };

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef();
  const nextSlide = (e) => {
    e.preventDefault();
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="countainer">
      <Button color="primary" onClick={handleDrawerOpen}>
        Mulai buat undangan
      </Button>
      <div className="BuildContainer">
        <Modal
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
          open={open}
          onBackdropClick={handleDrawerClose}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "75vw",
              height: "75vh",
              borderRadius: "10px",
            }}
          >
            <Button style={{}} onClick={handleDrawerClose}>
              close
            </Button>
            <div style={{ padding: "5vh 5vw 5vh 5vw" }}>
              <h1 style={{ textAlign: "center" }}>Buat Undangan</h1>
              <div style={{ textAlign: "end" }}></div>
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <form onSubmit={nextSlide}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "45vw" }}>
                        <TextField
                          required
                          style={{ width: "75%" }}
                          onChange={handleOnChange1}
                          className="waktu"
                          id="standard-basic"
                          value={NamaPa}
                          label="Nama Mempelai Pria"
                        />
                        <br />

                        <TextField
                          value={NamaPaLkp}
                          style={{ width: "75%" }}
                          type="text"
                          onChange={handleOnChange3}
                          required
                          className="waktu"
                          label="Nama Lengkap Mempelai Pria"
                          placeholder="Firstname Lastname"
                        />
                        <br />
                        <TextField
                          value={OrtuPa}
                          style={{ width: "75%" }}
                          type="text"
                          onChange={handleOnChange5}
                          required
                          className="waktu"
                          label="Nama orangtua Mempelai Pria"
                          placeholder="Bapak example dan Ibu example"
                        />
                      </div>
                      <div>
                        <p>Foto Mempelai Pria</p>
                        <ImageUpload props="Img4" />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingRight: "2vw",
                      }}
                    >
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className="button"
                        // onClick={nextSlide}
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
                {/* Slider2 */}
                <div>
                  <form onSubmit={nextSlide}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "45vw" }}>
                        <TextField
                          required
                          value={NamaPi}
                          style={{ width: "75%" }}
                          onChange={handleOnChange2}
                          id="standard-basic"
                          className="waktu"
                          label="Nama Mempelai Wanita"
                        />

                        <TextField
                          value={NamaPiLkp}
                          style={{ width: "75%" }}
                          type="text"
                          onChange={handleOnChange4}
                          required
                          className="waktu"
                          label="Nama Lengkap Mempelai Wanita"
                          placeholder="Firstname Lastname"
                        />
                        <br />

                        <TextField
                          value={OrtuPi}
                          style={{ width: "75%" }}
                          type="text"
                          onChange={handleOnChange6}
                          required
                          className="waktu"
                          label="Nama orangtua Mempelai Wanita"
                          placeholder="Bapak example dan Ibu example"
                        />
                      </div>
                      <div>
                        <p>Foto Mempelai Wanita</p>
                        <ImageUpload props="Img3" />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "2vw",
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        className="button"
                        onClick={previousSlide}
                      >
                        Back
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        className="button"
                        type="submit"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
                {/* Waktu pelaksanaan */}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <form onSubmit={nextSlide}>
                    <div
                      style={{
                        display: "flex",
                        padding: "2vh 2vw 0vh 2vw",
                      }}
                    >
                      <TextField
                        style={{
                          paddingRight: "2vw",
                        }}
                        id="date"
                        label="Waktu Pelaksanaan"
                        type="date"
                        defaultValue="2021-05-24"
                        onChange={handleOnChange7}
                        className="waktu"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <TextField
                        required
                        id="time"
                        label="Akad"
                        type="time"
                        defaultValue={Akad}
                        onChange={handleOnChange8}
                        className="waktu"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 min
                        }}
                      />
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                      <div style={{ padding: "0 2vw" }}>
                        <TextField
                          required
                          id="time"
                          label="Resepsi1"
                          type="time"
                          defaultValue={Resepsi1}
                          onChange={handleOnChange9}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />

                        <TextField
                          required
                          id="time"
                          label="End"
                          type="time"
                          defaultValue={Resepsi1End}
                          onChange={handleOnChange15}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                        <br />
                        <TextField
                          required
                          id="time"
                          label="Resepsi2"
                          type="time"
                          defaultValue={Resepsi2}
                          onChange={handleOnChange10}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />

                        <TextField
                          required
                          id="time"
                          label="End"
                          type="time"
                          defaultValue={Resepsi2End}
                          onChange={handleOnChange16}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                      </div>

                      <div>
                        <TextField
                          required
                          id="time"
                          label="Resepsi3"
                          type="time"
                          defaultValue={Resepsi3}
                          onChange={handleOnChange11}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                        <TextField
                          required
                          id="time"
                          label="End"
                          type="time"
                          defaultValue={Resepsi3End}
                          onChange={handleOnChange17}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                        <br />
                        <TextField
                          required
                          id="time"
                          label="Resepsi4"
                          type="time"
                          defaultValue={Resepsi4}
                          onChange={handleOnChange18}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                        <TextField
                          required
                          id="time"
                          label="End"
                          type="time"
                          defaultValue={Resepsi4End}
                          onChange={handleOnChange19}
                          className="waktu"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "2vw",
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        className="button"
                        onClick={previousSlide}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className="button"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
                <div>
                  <br />
                  <form onSubmit={nextSlide}>
                    <TextField
                      value={NamaVenue}
                      style={{ width: "75%" }}
                      type="text"
                      onChange={handleOnChange12}
                      required
                      className="waktu"
                      label="Nama Venue"
                    />
                    <br />
                    <TextField
                      value={AlamatVenue}
                      style={{ width: "75%" }}
                      type="text"
                      onChange={handleOnChange13}
                      required
                      className="waktu"
                      label="Alamat Venue"
                    />
                    <br />
                    <TextField
                      value={LinkMaps}
                      style={{ width: "75%" }}
                      type="text"
                      onChange={handleOnChange14}
                      required
                      className="waktu"
                      label="Link Maps"
                    />
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "2vw",
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        className="button"
                        onClick={previousSlide}
                      >
                        Back
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        className="button"
                        type="submit"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
                <div>
                  <h4>Upload Music</h4>
                  <UploadMusic props="music" />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingRight: "2vw",
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      className="button"
                      onClick={previousSlide}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      onClick={createName}
                      variant="contained"
                      color="primary"
                      size="small"
                      // className={classes.button}
                      startIcon={<SaveIcon />}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Modal>
        <div>
          <div className="BuildPreview">
            <UndanganBuild {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}
