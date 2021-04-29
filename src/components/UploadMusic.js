import React, { useState, useEffect } from "react";
import fire from "./../fire";

export default function UploadMusic(props) {
  const [imageUrl, setImageUrl] = useState([]);
  const [Uid, setUid] = useState("ok");
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });
  const readImages = async (e) => {
    const file = e.target.files[0];

    const id = props.props;

    const storageRef = fire.storage().ref(Uid).child("music").child(id);

    const imageRef = fire.database().ref(Uid).child("music").child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
    });
  };

  const getImageUrl = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const imageRef = fire.database().ref(Uid).child("music");

        imageRef.on("value", (snapshot) => {
          const imageUrls = snapshot.val();
          const urls = [];
          for (let id in imageUrls) {
            urls.push({ id, url: imageUrls[id] });
          }
          const newState = [...imageUrl, ...urls];
          setImageUrl(newState);
        });
      } else {
      }
    });
  };

  useEffect(() => {
    getImageUrl();
  }, []);

  return (
    <div>
      <input
        type="file"
        accept=".mp3,.MP3,.WMA,.M4A,.m4a/*"
        onChange={readImages}
      />
      {/* <button onClick={getImageUrl}>ulpoad</button> */}
    </div>
  );
}
