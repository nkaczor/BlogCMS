import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './navigation.css';

export default function Navigation() {
  return (
    <Navbar fixedTop className="navigation">
      <Navbar.Header>
        <Navbar.Brand className="brand">
          <a href="#home">Natalia'a Blog</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight className="nav-elements">
        <NavItem eventKey={1} href="#">
          Home
        </NavItem>
        <NavItem eventKey={2} href="#">
          About
        </NavItem>
        <NavDropdown eventKey={3} title="Links" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
