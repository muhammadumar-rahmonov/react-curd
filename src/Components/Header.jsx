import React from "react";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="./CreateUser">Create</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="./" eventKey="link-1">
            home
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;
