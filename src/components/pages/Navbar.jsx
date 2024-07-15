import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useLocation } from "react-router-dom";

 function NavBar(){
  let location = useLocation();
    return(
      
        <Navbar expand="lg" b data-bs-theme="dark" className='nav-bar'>
        <Container>

          <Navbar.Brand href="/">Portfolio</Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='nav-list'>
            <Nav >
            <CustomNavLink 
                    href="/"
                    currentPath={location.pathname}
                    className='nav-item '
                  >
                    Home
                  </CustomNavLink>
                  <CustomNavLink
                    href="/about"
                    currentPath={location.pathname}
                    className='nav-item '
                  >
                   About
                  </CustomNavLink>
                  <CustomNavLink
                    href="/projects"
                    currentPath={location.pathname}
                    className='nav-item '
                  >
                   Projects
                  </CustomNavLink>
                  <CustomNavLink
                    href="/contact"
                    currentPath={location.pathname}
                    className='nav-item '
                  >
                   Contact
                  </CustomNavLink>
              {/* <Nav.Link href="/" className='nav-item '>Home</Nav.Link>
              <Nav.Link href="/about" className='nav-item'>About</Nav.Link>
              <Nav.Link href="/projects" className='nav-item'>Projects</Nav.Link>
              <Nav.Link href="/contact" className='nav-item'>Contact</Nav.Link> */}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

 }
 function CustomNavLink({ href, currentPath, children }) {
  // Determine if the current link matches the active link
  const isActive = currentPath === href;

  return (
    <Nav.Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Nav.Link>
  );
}

 export default NavBar;