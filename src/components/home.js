import React, { Component } from "react";

const axios = require("axios");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("user") == null) {
      window.location = "/login";
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
    // console.log(user);
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome (insert name code)</h1>
        <div class="card">
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Balance
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Transfer link
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Transaction history
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
