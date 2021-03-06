import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Logout from "./components/logout";
import MakePayment from "./components/makePayment";
import Profile from "./components/profile";
import TransactionHistory from "./components/transactionHistory";

import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            {/* <Route path="/login" component={Login}></Route> */}
            <Route path="/home" component={Home}></Route>
            <Route path="/makePayment" component={MakePayment}></Route>
            <Route
              path="/transactionHistory"
              component={TransactionHistory}
            ></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
