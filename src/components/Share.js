import React, { useEffect, useState } from "react";
import fire from "../fire";
import { WhatsappShareButton } from "react-share";
import { useHistory } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Tooltip from "@material-ui/core/Tooltip";
import SettingsIcon from "@material-ui/icons/Settings";
import CheckBox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
export default function Nama({ name }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [sesi0, setSesi0] = useState(false);
  const [sesi1, setSesi1] = useState(false);
  const [sesi2, setSesi2] = useState(false);
  const [sesi3, setSesi3] = useState(false);
  const [sesi4, setSesi4] = useState(false);

  const handleChange0 = (event) => {
    setSesi0(event.target.checked);
  };

  const handleChange1 = (event) => {
    setSesi1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setSesi2(event.target.checked);
  };
  const handleChange3 = (event) => {
    setSesi3(event.target.checked);
  };
  const handleChange4 = (event) => {
    setSesi4(event.target.checked);
  };

  const [Uid, setUid] = useState("");
  const [LinkUndangan, setLinkUndangan] = useState([]);
  const Pesan = `Assalamu'alaikum wr.wb.

Bismillahirahmanirrahim.

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i di acara pernikahan kami 

Berikut link untuk info lengkap dari acara kami

${window.location.origin + `/${name.id}`}

Demi menjaga protokol kesehatan selama pandemi, dimohon untuk menyesuaikan dengan kondisi kesehatan dan daerah masing-masing. Besar harapan kami untuk mengedepankan kesehatan semua pihak dan doa restu dari Bapak/Ibu/Saudara/i.

Wassalamu'alaikum Wr. Wb.


`;
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);

        const nameRef = fire.database().ref(user.uid).child("Undangan");
        nameRef.on("value", (snapshot) => {
          const title = snapshot.val();
          if (title === null) {
          } else {
            setLinkUndangan(title.LinkUndangan);
          }
        });
      } else {
      }
    });
  }, [LinkUndangan]);

  // useEffect(() => {
  //   Sesi();
  // }, [sesi1, sesi2, sesi3, sesi4, sesi0]);

  const Sesi = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameRef = fire
          .database()
          .ref(user.uid)
          .child("Name")
          .child(name.id);
        nameRef.update({
          sesi0: sesi0,
          sesi1: sesi1,
          sesi2: sesi2,
          sesi3: sesi3,
          sesi4: sesi4,
        });
      } else {
      }
    });
    handleClose();
  };
  const history = useHistory();
  const openNewtab = () => {
    window.open(window.location.origin + `/${name.id}`, "_blank");
  };

  return (
    <div key={name.id}>
      <div className="konfirmasi">
        <h4>{name.title}</h4>

        <div className="tombol">
          <Tooltip title="Copy Link">
            <FileCopyIcon
              className="PrintIcon"
              onClick={() => {
                navigator.clipboard.writeText(
                  window.location.origin + `/${name.id}`
                );
              }}
            />
          </Tooltip>

          <Dialog
            fullWidth="true"
            maxWidth="xs"
            open={open}
            onClose={handleClose}
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <DialogTitle>
              <Button
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={handleClose}
                color="primary"
              >
                <CloseIcon />
              </Button>
              Pilih Sesi Undangan
            </DialogTitle>
            <DialogContent style={{ display: "flex", alignSelf: "center" }}>
              <div>
                <CheckBox checked={sesi0} onChange={handleChange0} />
                Akad
                <br />
                <CheckBox checked={sesi1} onChange={handleChange1} />
                Resepsi 1
                <br />
                <CheckBox checked={sesi2} onChange={handleChange2} />
                Resepsi 2
                <br />
              </div>
              <div>
                <CheckBox checked={sesi3} onChange={handleChange3} />
                Resepsi 3
                <br />
                <CheckBox checked={sesi4} onChange={handleChange4} />
                Resepsi 4
                <br />
              </div>
              <br />
            </DialogContent>
            <Button
              style={{ display: "flex", alignSelf: "center" }}
              onClick={Sesi}
              color="primary"
            >
              <SaveIcon /> Save
            </Button>
          </Dialog>
          <SettingsIcon onClick={handleClickOpen} className="PrintIcon" />
          <WhatsappShareButton url={Pesan}>
            <SendIcon className="PrintIcon" />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
}
