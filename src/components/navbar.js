import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Navbar">
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="white"
          variant="light"
        >
          <ReactBootStrap.Navbar.Brand href="/">
            Techtrek
          </ReactBootStrap.Navbar.Brand>

          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="/login">
                Login
              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="/register">
                Register
              </ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="/dashboard">
                Dashboard
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav className="NavUser">
              <ReactBootStrap.NavDropdown
                title="User"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="/logout">
                  Logout
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/test1">
                  Test1
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/test2">
                  Test2
                </ReactBootStrap.NavDropdown.Item>

                <ReactBootStrap.NavDropdown.Item href="/test3">
                  Test3
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default NavBar;
