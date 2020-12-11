import React, { Component } from "react";

const axios = require("axios");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      accountDetails: "",
      accountTransactions: "",
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

      this.displayTransactions(JSON.parse(localStorage.getItem("user")).custID);
      this.displayUserInfo(JSON.parse(localStorage.getItem("user")).custID);
    }
  }

  displayUserInfo = (custId) => {
    axios
      .post("/api/accountdetails", {
        customerID: custId,
      })
      .then((response) => response)
      .catch((error) => error.response)
      .then((response) => {
        console.log(response);
        if (response.status === "200" || response.status === 200) {
          console.log(response.data);
          for (var i in response.data) {
            if (response.data[i].linked) {
              this.setState({ accountDetails: response.data[i] });
              break;
            }
          }
        }
      });
  };

  displayTransactions = (custId) => {
    axios
      .post("/api/transactiondetails", {
        customerID: custId,
      })
      .then((response) => response)
      .catch((error) => error.response)
      .then((response) => {
        console.log(response);
        if (response.status === "200" || response.status === 200) {
          this.setState({ accountTransactions: response.data });
        }
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
    // console.log(user);
  };

  render() {
    console.log(this.state.accountDetails);

    return (
      <div className="App">
        <section>
          <div class="container">
            
            <div class="row">
              <div class="col-lg-6">
                <h1>Welcome {this.state.username}</h1>
                <div class="row">
                  <div class="accountbalance">
                    $
                    {this.state.accountDetails.availableBal &&
                      this.state.accountDetails.availableBal}
                    {this.state.accountDetails.accountName &&
                      this.state.accountDetails.accountName}
                    {this.state.accountDetails.accountNumber &&
                      this.state.accountDetails.accountNumber}
                  </div>

                  <div class="transactionhist">
                    <table class="transactionhist">
                      {this.state.accountTransactions &&
                        this.state.accountTransactions.map((data, i) => (
                          <div key={i}>
                            <tr>
                              <td align="left">{data.custID}</td>
                              <td align="right">{data.amount}</td>
                            </tr>
                          </div>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <h3>Functions here</h3>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
