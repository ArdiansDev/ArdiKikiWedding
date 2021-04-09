import React, { useState, useEffect } from "react";
import fire from "./../fire";
import Nama from "../components/Konfirmasi";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
function Konfirmasi() {
  const [Name, setName] = useState([]);
  const [search, setSearch] = useState("");
  const [FilteredName, setFilteredName] = useState([]);

  const [FilteredKonfirm, setFilteredKonfirm] = useState([]);
  const [Tglkonfirm, setTglkonfirm] = useState(false);
  let today = new Date();
  const hh = String(today.getHours());
  const mm = String(today.getMinutes());
  const ss = String(today.getSeconds());

  today = hh + mm + ss;
  //   console.log(today);

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
          //   setFilteredhadir(List);
        });
      } else {
      }
    });
  }, []);

  const filterkonfirm = () => {
    setTglkonfirm((check) => !check);
  };

  useEffect(() => {
    if (Tglkonfirm) {
      setFilteredKonfirm(
        Name.filter((hasil) => hasil.konfirmasi === Tglkonfirm)
      );
    } else {
      setFilteredKonfirm(Name);
    }
  }, [Name, Tglkonfirm]);

  useEffect(() => {
    setFilteredName(
      FilteredKonfirm.filter((hasil) =>
        hasil.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, FilteredKonfirm]);

  return (
    <Container>
      <h1>Konfirmasi</h1>
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>

        <Col xs="auto">
          <Form.Check
            type="checkbox"
            className="mb-1"
            label="Konfirmasi"
            onClick={filterkonfirm}
          />
        </Col>
      </Form.Row>
      {FilteredKonfirm.map((name, idx) => (
        <Nama key={idx} name={name} />
      ))}
    </Container>
  );
}

export default Konfirmasi;
