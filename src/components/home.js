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
    console.log();
    if (localStorage.getItem("user") == null) {
      window.location.href = "/login";
    } else {
      this.setState({
        username: JSON.parse(localStorage.getItem("user")).lastName,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
    // console.log(user);
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome {this.state.username}</h1>
        <div className="card">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Balance
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Transfer link
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
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
