import React from "react";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth.js";
import "./header.css";

const Header = () => {
  const { AllContexts, selectedCourse } = useAuth();
  const { user, logOut } = AllContexts;
  const { displayName, email } = user;
  return (
    <div className="">
      <Navbar expand="lg" className="bg-secondary text-white">
        <Container >
          <Navbar.Brand as={NavLink} to="/home">
            
            <span className="title"> Medicare Hospital</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#feature" className="text-white">
                All Services
              </Nav.Link>

              <Nav.Link as={NavLink} to="/cart" className="text-white">
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faShoppingCart}
                />
                <Badge>{selectedCourse.length}</Badge>
              </Nav.Link>

              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut} className="btn btn-warning">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
