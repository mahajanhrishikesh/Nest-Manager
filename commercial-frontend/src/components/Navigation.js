import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
// import './styles/nav.css';
const Navigation = () => {
  return (
//     <div className="nav-container">
//         <div className="container">
//             <div className="nav-wrapper">
//                     <Link className="logo" to="/">
//                         <h1>Apartments Inc</h1>
//                     </Link>

//                     <div className="nav-links">
//                         <Link className="link" to="/gallery">
//                                 <h2>Gallery</h2>
//                         </Link>

//                         <Link className="link" to="/floorplans">
//                                 <h2>Floorplans</h2>
//                         </Link>

//                         <Link className="link" to="/apply">
//                                 <h2>Apply</h2>
//                         </Link>

//                         <Link className="link" to="/contact">
//                                 <h2>Contact</h2>
//                         </Link>
//                     </div>
//             </div>
//         </div>
//     </div>
        <Navbar bg='dark' variant='dark' expand="md">
                <Container>
                <Navbar.Brand href="/">Parkview Living</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/floorplans">Floor Plans</Nav.Link>
                        <Nav.Link href="/apply">Apply</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default Navigation