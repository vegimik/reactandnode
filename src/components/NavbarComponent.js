import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function NavbarComponent() {
  return (
    // <div>
    //   <Link to="/">Home </Link>
    //   <Link to="/create">Create new task </Link>
    //   <Link to="/edit">Edit task </Link>
    // </div>
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create new task</Nav.Link>
          <Nav.Link href="/edit/:id">Edit task</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Nav variant="pills" activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/create">Create new task</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="edit">Edit task</Nav.Link>
        </Nav.Item>
      </Nav> */}
    </>
  );
};

export default NavbarComponent;
