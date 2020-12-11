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
            Paylor
          </ReactBootStrap.Navbar.Brand>

          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              {!localStorage.getItem("user") && (
                <ReactBootStrap.Nav.Link href="/login">
                  Login
                </ReactBootStrap.Nav.Link>
              )}
              <ReactBootStrap.Nav.Link href="/makePayment">
                Make Payment
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/profile">
                Profile
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/transactionHistory">
                Transaction History
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/logout">
                See you again!
              </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default NavBar;
