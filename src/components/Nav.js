import React from "react";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logout from "./Logout";
import PrintIcon from "@material-ui/icons/Print";
export default function navigasi() {
  const print = () => {
    window.print();
  };

  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Container>
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Navbar.Brand href="/">WeddingKik</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        {/* </Navbar.Collapse> */}
        <DropdownButton id="dropdown-basic-button" title="Menu">
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/Konfirmasi">Konfirmasi</Dropdown.Item>
          <Dropdown.Item href="/CetakQR">CetakQR</Dropdown.Item>
          <Dropdown.Item href="/DaftarTamu">Daftar Tamu</Dropdown.Item>
          <Dropdown.Item href="/Build">Buat Undangan</Dropdown.Item>
          <Dropdown.Item href="/Share">Bagikan Undangan</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Logout />
          </Dropdown.Item>
        </DropdownButton>
        <PrintIcon className="PrintIcon" onClick={print} />
        {/* <button onClick={print}>Print this page</button> */}
      </Container>
    </Navbar>
  );
}
