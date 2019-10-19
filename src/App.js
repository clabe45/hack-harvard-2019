import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './client/pages/home/Home';
import './App.css';
import Header from './client/header/Header';
// import uuid from 'uuid';
import Messages from './client/pages/Messages';
// import Projects from './client/pages/Projects';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/messages" component={Messages} />
        </div>
      </Router>
    );
  }
}

export default App;
