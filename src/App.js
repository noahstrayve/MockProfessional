import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headline from './components/header/header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Headline/>
    );
  }
}

export default App;
