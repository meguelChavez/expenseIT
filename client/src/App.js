import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/Landing/Landing';
import axios from 'axios';



class App extends Component {
    state = {
        isOpen: false
    }

    googleAuth = async () => {
        // console.log("g auth")
        // try {
        //     const res = await axios.get('/auth/google')
        //     console.log(res)
        // } catch (err) {
        //     console.log(err)
        // }
        window.open("http://localhost:3001/auth/google", "_self");
    }

    _handleSignInClick = () => {
        // Authenticate using via passport api in the backend
        // Open google login page
        window.open("http://localhost:3001/auth/google", "_self");
    };
    render() {
        return (
            <div>initial

            <Landing googleAuth={this.googleAuth} />
            </div>
            //   <Router>
            //     <div className="App">
            //       <Switch>
            //         <Route exact path="/" />
            //       </Switch>
            //     </div>
            //   </Router>
        );
    }
}

export default App;
