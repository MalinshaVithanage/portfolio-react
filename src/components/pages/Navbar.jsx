import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';


function NavBar() {
  const location = useLocation();


  return (
    <Navbar expand="sm" bg="dark" variant="dark" className="nav-bar">
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="nav-list">
            <CustomNavLink href="/" currentPath={location.pathname} className="nav-item">
              Home
            </CustomNavLink>
            <CustomNavLink href="/about" currentPath={location.pathname} className="nav-item">
              About
            </CustomNavLink>
            <CustomNavLink href="/projects" currentPath={location.pathname} className="nav-item">
              Projects
            </CustomNavLink>
            <CustomNavLink href="/contact" currentPath={location.pathname} className="nav-item">
              Contact
            </CustomNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomNavLink({ href, currentPath, children }) {

  const isActive = currentPath === href;

  return (
    <Nav.Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Nav.Link>
  );
}

export default NavBar;
