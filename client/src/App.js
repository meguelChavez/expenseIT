import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.min.css";
import "react-table/react-table.css";
// import './date-picker.component.bootstrap.css';
import "./App.css";
import Landing from "./components/Landing/Landing";
import axios from "axios";
import Expenses from "./components/Expenses/Expenses";
import NavBar from "./components/Nav/NavBar";

class App extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = async () => {
    try {
      const res = await axios.get("/auth/login/success");
      console.log(res);
      this.setState({ user: res.data.user, isAuth: true }, this.getExpenses());
    } catch (err) {
      console.log(err);
    }
  };

  getExpenses = () => {
    console.log("Get");
    axios.get("/dashboard/expenses").then(res => {
      console.log("gettin");
      console.log(res);
      const user = res.data[0];
      if (user) {
        const { expenses } = res.data[0];
        this.setState({ expenses });
      }
    });
  };

  // addExpenses = () => {
  //     const payload = {
  //         "businessName": "namelkjsa",
  //         "category": "laksjdf",
  //         "amouont": 1235,
  //         "date": "321654"
  //     }
  //     console.log(payload)

  //     axios.post("/dashboard/add_expense", payload).then((res) => {
  //         console.log(res)
  //         this.getExpenses()
  //     })
  // }

  googleAuth = async () => {
    console.log("g auth");
    // try {
    //     const res = await axios.get('/auth/google')
    //     console.log(res)
    // } catch (err) {
    //     console.log(err)
    // }
    window.open("http://localhost:3001/auth/google", "_self");
  };

  logOut = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  render() {
    const { isAuth, user } = this.state;
    return (
      <Router>
        <NavBar isAuth={isAuth} logOut={this.logOut} />
        <Switch>
          {isAuth ? (
            <Route
              exact
              path="/"
              render={props => {
                return <Expenses user={user} />;
              }}
            />
          ) : (
            <Route
              exact
              path="/"
              render={props => <Landing googleAuth={this.googleAuth} />}
            />
          )}
          {isAuth ? (
            <Route
              exact
              path="/dashboard"
              render={props => <Expenses user={user} />}
            />
          ) : null}
        </Switch>
      </Router>
    );
  }
}

export default App;
