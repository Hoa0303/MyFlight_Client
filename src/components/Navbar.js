import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { NavDropdown } from 'react-bootstrap';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function logout() {
    Cookies.remove("userName");
    Cookies.remove("userID");
    window.location.href = '/';
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h1>My Flight</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => updateExpanded(false)}>
                Home
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                Flight
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/news"
                onClick={() => updateExpanded(false)}
              >
                News
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/guidance"
                onClick={() => updateExpanded(false)}
              >
                Guidance
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                Contact
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/cart"
                onClick={() => updateExpanded(false)}
              >
                My Cart
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              {Cookies.get("userName") ? (
                <NavDropdown title={Cookies.get("userName")} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/profile">Trang cá nhân</NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={(logout)}>Đăng xuất</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={() => updateExpanded(false)}
                >
                  Login
                </NavLink>
              )}
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
