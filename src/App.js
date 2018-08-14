import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headline from './components/header/header';
import HomePage from './components/landing/landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      	<Router>
      		<div>

        		<Route exact path="/" 
                   render={() => <div>
                                    <Headline />
      								<HomePage />
                                  </div>} />

      			<Route exact path="/contact" 
                   render={() => <div>
                                    <Headline />
                                  </div>} />

      			<Route exact path="/mission" 
                   render={() => <div>
                                    <Headline />
                                  </div>} />

      			<Route exact path="/regions" 
                   render={() => <div>
                                    <Headline />
                                  </div>} />
                <Route exact path="/team" 
                   render={() => <div>
                                    <Headline />
                                  </div>} />
                                  
      </div>
    </Router>
    );
  }
}

export default App;
