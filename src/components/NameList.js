import React, { useState, useEffect } from "react";
import fire from "../fire";
import Nama from "./Konfirmasi";
import CardColumns from "react-bootstrap/CardColumns";

export default function NameList() {
  const [NameList, setNameList] = useState();
  const [Uid, setUid] = useState("");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
      console.log(user.uid);
    } else {
    }
  });

  //
  useEffect(() => {
    const nameRef = fire.database().ref(Uid).child("Name");
    nameRef.on("value", (snapshot) => {
      const names = snapshot.val();
      const nameList = [];
      for (let id in names) {
        nameList.push({ id, ...names[id] });
      }
      const List = [...nameList].reverse();
      setNameList(List);

      // console.log(NameList);
    });
  }, []);

  return (
    <div className="">
      <CardColumns>
        <div className="">
          {NameList
            ? NameList.map((name, index) => <Nama name={name} key={index} />)
            : ""}
        </div>
      </CardColumns>
    </div>
  );
}
