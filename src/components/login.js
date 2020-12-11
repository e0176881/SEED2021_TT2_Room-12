import React, { Component } from "react";

const axios = require("axios");

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberMe: false,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }
  componentDidMount() {
    console.log(localStorage.getItem("userLoginDetails") != null);

    if (localStorage.getItem("userLoginDetails") != null) {
      console.log("here");
      this.setState({
        rememberMe: true,
        username: JSON.parse(localStorage.getItem("userLoginDetails")).username,
        password: JSON.parse(localStorage.getItem("userLoginDetails")).password,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
    // console.log(user);
  };

  handleCheckBox = (e) => {
    this.setState({ rememberMe: !this.state.rememberMe });
  };

  login = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axios
      .post("/api/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => response)
      .catch((error) => error.response)
      .then((response) => {
        if (response.status === "200" || response.status === 200) {
          console.log(response);

          localStorage.setItem("user", JSON.stringify(response.data));
          if (this.state.rememberMe) {
            var userCredentials = {
              username: this.state.username,
              password: this.state.password,
            };
            localStorage.setItem(
              "userLoginDetails",
              JSON.stringify(userCredentials)
            );
          } else {
            localStorage.removeItem("userLoginDetails");
            this.setState({ rememberMe: false });
          }
        }
      });
    window.location.href = "/home";
  };
  render() {
    return (
      <form onSubmit={this.login}>
        <div class="row mt-5 justify-content-center">
          <div class="col-lg-4">
            <h3>Log in</h3>

            <div className="form-group">
              
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                checked={this.state.rememberMe}
                onChange={this.handleCheckBox}
              />
            
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
        </div>
      </form>
    );
  }
}
