import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './client/pages/home/Home';
import './App.css';
import Header from './client/header/Header';
// import uuid from 'uuid';
import User from './client/pages/user/User';
// import Projects from './client/pages/Projects';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
