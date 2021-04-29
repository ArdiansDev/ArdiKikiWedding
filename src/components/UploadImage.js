import React, { useState, useEffect } from "react";
import fire from "./../fire";
import imageCompression from "browser-image-compression";
export default function UploadImage(props) {
  const [imageUrl, setImageUrl] = useState([]);
  const [Uid, setUid] = useState("ok");

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  const readImages = (e) => {
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1500,
      useWebWorker: true,
    };

    if (options.maxSizeMB >= file.size / 1024) {
      alert("Image is too small, can't be Compressed!");
      return 0;
    }

    imageCompression(file, options).then(async (x) => {
      // disi?

      // const file = e.target.files[0];
      // if (!file) return;
      const id = props.props;

      const storageRef = fire.storage().ref(Uid).child("images").child(id);

      const imageRef = fire
        .database()
        .ref(Uid)
        .child("images")
        .child("daily")
        .child(id);

      await storageRef.put(x);
      storageRef.getDownloadURL().then((url) => {
        imageRef.set(url);
        const newState = [...imageUrl, { id, url }];
        setImageUrl(newState);
      });
    });
  };

  const getImageUrl = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const imageRef = fire
          .database()
          .ref(Uid)
          .child("images")
          .child("daily");
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
    <div className="UploadImage">
      <input type="file" accept="image/*" onChange={readImages} />
      {/* <button onClick={getImageUrl}>ulpoad</button> */}
    </div>
  );
}
