import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="/">VIT Canteens</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/FC">Fruit Canteen</Nav.Link>
          <Nav.Link href="/FoodC">Food Canteen</Nav.Link>
          <Nav.Link href="/NS">NesCafe</Nav.Link>
          <Nav.Link href="/PB">Poona Bakery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
