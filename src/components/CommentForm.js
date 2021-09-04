import React, { useEffect, useState } from "react";
import fire from "./../fire";
import Aos from "aos";
import "aos/dist/aos.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CommentForm(props) {
  const [Name, setName] = useState([]);
  const [nama, setnama] = useState("");
  const [Comment, setComment] = useState("");
  const [Uid, setUid] = useState("ok");

  const handleOnChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handleOnChangeName = (e) => {
    setnama(e.target.value);
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
    <div>
      <form onSubmit={createName} className="commentArea">
        <h1>Name:*</h1>
        <input
          as="textarea"
          rows={1}
          className="nameBox"
          // style={{ width: "45vw" }}
          type="text"
          onChange={handleOnChangeName}
          onSubmit={createName}
          required
          value={nama}
          placeholder=""
        />
        <br></br>
        <h1>Wishes:*</h1>
        <textarea
          rows={5}
          className="commentBox"
          // style={{ width: "45vw" }}
          type="text"
          onChange={handleOnChangeComment}
          onSubmit={createName}
          required
          value={Comment}
          placeholder=""
        />

        <br></br>
        <button className="sendBtn" type="submit">
          Send
        </button>
      </form>
      <br></br>
      <div className="komentar">
        {Name.map((name, idx) => (
          <div key={idx}>
            <h5>{name.nama}</h5>
            <p>{name.Comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
