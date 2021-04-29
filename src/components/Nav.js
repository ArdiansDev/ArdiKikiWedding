import React from "react";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logout from "./Logout";

export default function navigasi() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Container>
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Navbar.Brand href="/">WeddingKik</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        {/* </Navbar.Collapse> */}
        <DropdownButton id="dropdown-button-drop-left" drop="left" title="Menu">
          <Dropdown.Item href="/">LayarSapa</Dropdown.Item>
          <Dropdown.Item href="/Konfirmasi">Konfirmasi</Dropdown.Item>
          <Dropdown.Item href="/CetakQR">CetakQR</Dropdown.Item>
          <Dropdown.Item href="/DaftarTamu">Daftar Tamu</Dropdown.Item>
          <Dropdown.Item href="/Build">Buat Undangan</Dropdown.Item>
          <Dropdown.Item href="/Share">Bagikan Undangan</Dropdown.Item>
          <Dropdown.Item href="/Scan">Scan QR</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Logout />
          </Dropdown.Item>
        </DropdownButton>

        {/* <button onClick={print}>Print this page</button> */}
      </Container>
    </Navbar>
  );
}
