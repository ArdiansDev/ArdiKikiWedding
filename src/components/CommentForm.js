import React, { useEffect, useState } from "react";
import fire from "./../fire";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CommentForm(props) {
  const [Name, setName] = useState([]);
  const [nama, setnama] = useState("anonim");
  const [Comment, setComment] = useState("");
  const [Uid, setUid] = useState("ok");

  const handleOnChangeComment = (e) => {
    if (props.nama == null) {
      // console.log("null");
      setnama("Anonim");
    } else {
      setComment(e.target.value);
      setnama(props.nama);
    }
  };
  const createName = (e) => {
    e.preventDefault();
    const nameRef = fire.database().ref("ok").child("Comment");
    const name = {
      nama,
      Comment,
    };

    nameRef.push(name);
    setComment("");
    setnama("");
  };

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  useEffect(() => {
    const nameRef = fire.database().ref("ok").child("Comment");
    nameRef.on("value", (snapshot) => {
      const names = snapshot.val();
      const nameList = [];
      for (let id in names) {
        nameList.push({ id, ...names[id] });
      }
      const List = [...nameList].reverse();

      setName(List);
    });
  }, [Uid]);

  return (
    <div className="">
      <form onSubmit={createName}>
        <Form.Control
          as="textarea"
          rows={3}
          style={{ width: "45vw" }}
          type="text"
          onChange={handleOnChangeComment}
          onSubmit={createName}
          required
          value={Comment}
          placeholder="Comment"
        />
        <br></br>

        <br></br>
        <Button variant="success" type="submit">
          Add Comment
        </Button>
      </form>
      <br></br>
      {Name.map((name, idx) => (
        <div key={idx} className="komentar">
          <h5>{name.nama}</h5>
          <p>{name.Comment}</p>
        </div>
      ))}
    </div>
  );
}
