import React, { useEffect, useState } from "react";
import fire from "../fire";

import { useHistory } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Tooltip from "@material-ui/core/Tooltip";

export default function Nama({ name }) {
  const [Uid, setUid] = useState("");
  const [LinkUndangan, setLinkUndangan] = useState([]);

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
  const history = useHistory();
  const openNewtab = () => {
    window.open(
      window.location.origin + `/${LinkUndangan}/${name.id}`,
      "_blank"
    );
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
                  window.location.origin + `/${LinkUndangan}/${name.id}`
                );
              }}
            />
          </Tooltip>
          <Tooltip title="Buka Link">
            <SendIcon className="PrintIcon" onClick={openNewtab} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
