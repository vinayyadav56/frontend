import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Menu.css";
const Menu = (props) => {
  const handleLogout = () => {
    props.history.push("/");
  };
  return (
    <div className="navbar-section">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Carry Kar</Navbar.Brand>
        <Nav className="mx-auto nav_bar_wrapper">
          <Link to="/booking" className="mr-5">Home</Link>
          <Link to="/about" className="mr-5">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        <Nav>
          <NavDropdown title="User Name">
            <NavDropdown.Item>
              <input type="button" value="Logout" onClick={handleLogout} />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Menu;
