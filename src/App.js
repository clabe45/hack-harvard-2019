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
      wanted: false
    },

    {
      id: 2,
      name: "Josh",
      wanted: true


    },

    {
      id: 3,
      name: "Bob",
      wanted: false


    },

    {id: 4,
      name: "Clerk",
      wanted: false
    }

    ]
  }

  //Toggle unwanted

  markUnwanted = (id) => {

    this.setState({persons: this.state.persons.map(person => {
      if (person.id === id) {
        person.wanted = !person.wanted
      }

      return person
    })});

  }

  render() {
    
    return (
    <div className="App">
      <Persons persons={this.state.persons} markUnwanted={this.markUnwanted}/>
    </div>  
  );
}
}

export default App;
