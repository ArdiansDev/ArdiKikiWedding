import React, { useState } from "react";
import fire from "../fire";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
export default function Nama({ name }) {
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
      console.log(user.uid);
    } else {
    }
  });
  const history = useHistory();
  const deleteName = () => {
    const nameRef = fire.database().ref(Uid).child("Name").child(name.id);
    nameRef.remove();
  };

  // const Hadir = () => {
  //   const nameRef = fire.database().ref("Name").child(name.id);
  //   nameRef.update({
  //     hadir: !name.hadir,
  //   });
  // };

  return (
    <div key={name.id}>
      <div className="konfirmasi">
        <h4>{name.title}</h4>

        <div className="tombol">
          <IconButton aria-label="delete">
            <DeleteIcon onClick={deleteName} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
