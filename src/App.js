import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './client/components/Persons';
import Header from './client/components/Header';
import uuid from 'uuid';
import Messages from './client/pages/Messages';
import Projects from './client/pages/Projects';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    persons: [
    {
      id: 1,
      name: "Steven",
      wanted: false,
      projectWanted: true,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"],
      projects: "An app that creates an interface for users."

    },

    {
      id: 2,
      name: "Josh",
      wanted: true,
      projectWanted: true,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"],
      projects: "An app that creates an interface for users."

    },

    {
      id: 3,
      name: "Bob",
      wanted: false,
      projectWanted: true,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"],
      projects: "An app that creates an interface for users."




    },

    {id: 4,
      name: "Clerk",
      wanted: false,
      projectWanted: false,
      description: "A short india shorta delta echo that likes to eat bread.",
      skills: ["css", "html"],
      interests: ["food", "apple"],
      projects: "An app that creates an interface for users."


    }

    ]
  }

  //Toggle unwanted

  markUnwantedProject = (id) => {
    this.setState({persons: this.state.persons.map(person => {
      if (person.id === id) {
        person.wanted = !person.wanted
      }

      return person
    })});

  }


  markUnwantedPerson = (id) => {

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

  delProject = (id) => {

    this.setState({persons: [...this.state.persons.filter(person => person.id !== id)]});

  }

  render() {
    
    return (
      <Router>
    <div className="App"> 
    <Header />
    <Route exact path="/" render={props => (

      <React.Fragment>
      <Persons persons={this.state.persons} markUnwantedPerson={this.markUnwantedPerson} delPerson={this.delPerson}/>

      </React.Fragment>

      )} />

      

      <Route path="/messages" component={Messages} />
    </div>  

    </Router>
  );
}
}

export default App;
