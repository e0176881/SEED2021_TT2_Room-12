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
    console.log(localStorage.getItem("user"));
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
        <section>
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h1>Welcome {this.state.username}</h1>
                <div class="row">
                  <div class="accountbalance">
                        insert account balance here 
                  </div>

                  <div class="transactionhist">
                        <table class="transactionhist">
                          <tr>
                            <td align="left">payee name</td>
                            <td align="right">amount</td>
                          </tr>
                        </table>
                  </div>
                </div>

              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <h3>Functions here</h3>
                <p>
                      
                </p>
                
                
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
