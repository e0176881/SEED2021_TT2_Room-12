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
      <div class="transactwrapper">
        <div class="container">
        <div class="mainleft">
          <div class="transactheader">
            <h2>Welcome {this.state.username}</h2>
            <div class="accountbalance1">
            $
            {this.state.accountDetails.availableBal &&
              this.state.accountDetails.availableBal}
            <br></br></div>
            <div class="textright">
            {this.state.accountDetails.accountName &&
              this.state.accountDetails.accountName}
            <br></br>
            {this.state.accountDetails.accountNumber &&
              this.state.accountDetails.accountNumber}
          </div></div>


          <div class="transactheader">
            <h2>Transaction History</h2>
            <table>
              {this.state.accountTransactions &&
                this.state.accountTransactions.map((data, i) => (
                  <div key={i}>
                    <thead>
                      <tr>
                        <th>Payee</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td align="left">{data.custID}</td>
                      <td align="right">{data.amount}</td>
                    </tr>
                    </tbody>
                  </div>
                ))}
            </table>
          </div>


          </div>
          <div class="mainright">
          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <a href="/makePayments" className="btn btn-info">Pay Someone</a>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <a href="/profile" className="btn btn-info">Profile</a>
            </div>
          </div>
          </div>

          
        </div>
      </div>
      
    );
  }
}

