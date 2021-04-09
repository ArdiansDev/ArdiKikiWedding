import React, { useState, useEffect } from "react";
import fire from "../fire";
import QR from "./../components/QR";

import { CardDeck, Container } from "react-bootstrap";

function CetakQR() {
  const [Name, setName] = useState([]);
  const search = "";
  const [filteredName, setFilteredName] = useState([]);

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

  useEffect(() => {
    // print();
    setFilteredName(
      Name.filter((name) =>
        name.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, Name]);

  const print = () => {
    window.print();
  };
  //
  return (
    <div className="">
      <Container>
        <br />

        <h3>WeddingKik! QR</h3>
        <br />
        <CardDeck>
          {filteredName.map((name, idx) => (
            <QR key={idx} name={name} />
          ))}
        </CardDeck>
      </Container>
    </div>
  );
}

export default CetakQR;
