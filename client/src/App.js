import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/Landing/Landing';


class App extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <div>initial

            <Landing />
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
