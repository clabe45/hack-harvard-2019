import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './components/Persons'

class App extends Component {
  state = {
    persons: [
    {
      id: 1,
      name: "Steven",


    },

    {
      id: 2,
      name: "Josh",


    },

    {
      id: 3,
      name: "Bob",


    },

    ]
  }

  render() {
    
    return (
    <div className="App">
      <Persons persons={this.state.persons}/>
    </div>
  );
}
}

export default App;
