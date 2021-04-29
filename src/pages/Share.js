import React, { useState, useEffect } from "react";
import fire from "../fire";
import Nama from "../components/Share";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { Container } from "react-bootstrap";
import { ListItemAvatar } from "@material-ui/core";
function Share() {
  const [Name, setName] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState([]);

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
          setFilteredName(List);
        });
      } else {
      }
    });
  }, [Uid]);

  useEffect(() => {
    setFilteredName(
      Name.filter((hasil) =>
        hasil.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Container>
      <h1>Bagikan undangan</h1>
      <Col xs="auto">
        <Form.Row className="align-items-center">
          <Form.Control
            type="text"
            placeholder="Search Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Row>
      </Col>
      <div className="">
        {filteredName.map((name, idx) => (
          <Nama key={idx} name={name} />
        ))}
      </div>
    </Container>
  );
}

export default Share;
