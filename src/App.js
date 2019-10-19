import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './components/Persons';
import Header from './components/Header';
import uuid from 'uuid';
import Messages from './components/pages/Messages';
import Projects from './components/pages/Projects';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    persons: [
    {
      id: 1,
      name: "Steven",
      wanted: false,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"]

    },

    {
      id: 2,
      name: "Josh",
      wanted: true,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"]



    },

    {
      id: 3,
      name: "Bob",
      wanted: false,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"]



    },

    {id: 4,
      name: "Clerk",
      wanted: false,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"]

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

  delPerson = (id) => {

    this.setState({persons: [...this.state.persons.filter(person => person.id !== id)]});

  }

  render() {
    
    return (
      <Router>
    <div className="App"> 
    <Header />
    <Route exact path="/" render={props => (

      <React.Fragment>
      <Persons persons={this.state.persons} markUnwanted={this.markUnwanted} delPerson={this.delPerson}/>

      </React.Fragment>

      )} />

      <Route path="/messages" component={Messages} />
      <Route path="/projects" component={Projects} />
    </div>  

    </Router>
  );
}
}

export default App;
