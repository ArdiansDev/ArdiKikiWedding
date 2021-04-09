import React, { useState } from "react";
import fire from "./../fire";

export default function Form() {
  const [title, setTitle] = useState("");
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
      console.log(user.uid);
    } else {
    }
  });

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createName = (e) => {
    e.preventDefault();
    const nameRef = fire.database().ref(Uid).child("Name");
    const name = {
      title,
      complete: false,
      hadir: false,
    };

    nameRef.push(name);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={createName}>
        <input
          type="text"
          onChange={handleOnChange}
          // onSubmit={createName}
          required
          value={title}
        />
        <button type="submit">Add Name</button>
      </form>
    </div>
  );
}
