import React from "react";
import UploadImage from "../../../components/UploadImage";
import Button from "react-bootstrap/Button";

export default function Panduan(props) {
  return (
    <div className="section6">
      <h2>Panduan Acara</h2>
      <p>
        Sehubungan dengan kondisi pandemi COVID 19, kami sekeluarga
        menindaklanjuti peraturan mengenai pembatasan tamu undangan. Oleh karena
        itu, mohon untuk dapat mengikuti panduan acara sebagai berikut :
      </p>

      <div className="protap">
        <div className="protap-warp">
          <img src="./../img/2.svg" alt="" />
          <h4>Undangan ini hanya berlaku untuk 2 ORANG.</h4>
        </div>
        <div className="protap-warp">
          <img src="./../img/6.svg" alt="" />
          <h4>Mencuci tangan dengan sabun</h4>
        </div>
        <div className="protap-warp">
          <img src="./../img/1.svg" alt="" />
          <h4>Menggunakan Hand Sanitizer</h4>
        </div>
        <div className="protap-warp">
          <img src="./../img/3.svg" alt="" />
          <h4>Menggunakan Masker</h4>
        </div>
        <div className="protap-warp">
          <img src="./../img/4.svg" alt="" />
          <h4>Tidak bersentuhan</h4>
        </div>
        <div className="protap-warp">
          <img src="./../img/5.svg" alt="" />
          <h4>Menjaga jarak</h4>
        </div>
      </div>
    </div>
  );
}
