import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './masthead.css';

export default class Navigation extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="overlay" />
        <div className="container">
          <div className="site-heading">
            <h1>Natalia's blog</h1>
            <span className="subheading">Just another lifestyle blog</span>
          </div>
        </div>
      </header>
    );
  }
}
