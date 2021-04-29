import React, { useState, useEffect } from "react";
import fire from "../fire";
import Nama from "../components/DaftarTamu";
import Form from "./../components/Form";
import { Container } from "react-bootstrap";
function Daftar() {
  const [Name, setName] = useState([]);

  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameRef = fire.database().ref(user.uid).child("Name");
        nameRef.on("value", (snapshot) => {
          const names = snapshot.val();
          const nameList = [];
          for (let id in names) {
            nameList.push({ id, ...names[id] });
          }
          const List = [...nameList].reverse();

          setName(List);
        });
      } else {
      }
    });
  }, []);

  return (
    <Container>
      <div className="">
        <h1>Input Data Tamu</h1>
        <Form />
        {Name.map((name, idx) => (
          <Nama key={idx} name={name} />
        ))}
      </div>
    </Container>
  );
}

export default Daftar;
