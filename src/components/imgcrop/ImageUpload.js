import React, { useState, useEffect } from "react";
import fire from "./../../fire";
import ImageCropper from "./ImageCropper";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
const ImageUpload = (props) => {
  const [blob, setBlob] = useState(null);
  const [inputImg, setInputImg] = useState("");
  const [show, setShow] = useState(false);
  const [Uid, setUid] = useState("ok");
  const [imageUrl, setImageUrl] = useState([]);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getBlob = (blob) => {
    // pass blob up from the ImageCropper component
    setBlob(blob);
  };

  const onInputChange = (e) => {
    // convert image file to base64 string
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setInputImg(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitImage = async (e) => {
    handleClose();
    // upload blob to firebase 'images' folder with filename 'image'
    e.preventDefault();

    const id = props.props;
    const storageRef = fire.storage().ref(Uid).child("images").child(id);
    const imageRef = fire
      .database()
      .ref(Uid)
      .child("images")
      .child("daily")
      .child(id);

    await storageRef.put(blob, { contentType: blob.type });
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
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
    <div>
      <Button variant="contained" color="primary" onClick={handleShow}>
        Upload
      </Button>

      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmitImage}>
            {inputImg && <ImageCropper getBlob={getBlob} inputImg={inputImg} />}
          </form>
          {/* <Divider /> */}

          <div
            style={{
              backgroundColor: "white",
              position: "absolute",
              bottom: "10%",
            }}
          >
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              onChange={onInputChange}
              id="contained-button-file"
            />
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                <CloudUploadIcon /> select file
              </Button>
            </label>

            <Button variant="primary" onClick={handleSubmitImage}>
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </div>

    //   <Modal show={show} onHide={handleClose}>
    //     <Modal.Body style={{ height: "40%", width: "20vw" }}>
    //       <form onSubmit={handleSubmitImage}>
    //         {inputImg && <ImageCropper getBlob={getBlob} inputImg={inputImg} />}
    //       </form>
    //     </Modal.Body>

    //     <Modal.Footer>
    //   <input
    //     style={{ display: "none" }}
    //     type="file"
    //     accept="image/*"
    //     onChange={onInputChange}
    //     id="contained-button-file"
    //   />

    //   <label htmlFor="contained-button-file">
    //     <Button variant="contained" color="primary" component="span">
    //       Upload
    //     </Button>
    //   </label>

    //   <Button variant="secondary" onClick={handleClose}>
    //     Close
    //   </Button>
    //   <Button variant="primary" onClick={handleSubmitImage}>
    //     Save Changes
    //   </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
  );
};

export default ImageUpload;
