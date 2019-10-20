import React from 'react';
import { } from 'semantic-ui-react'
import SearchResult from './components/SearchResult';
import logo from './assets/logo.svg';

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [
        {
          id: 1,
          name: 'Steven',
          picture: logo,
          wanted: true,
          // projectWanted: true,
          bio: 'A short india shorta delta echo that likes to eat bread.',
          skills: ['css', 'html'],
          interests: ['food', 'apple'],
          projects: 'An app that creates an interface for users.',
          majors: ['computer science'],
          url: '/user'
        },
        {
          id: 2,
          name: 'Josh',
          picture: logo,
          wanted: true,
          // projectWanted: true,
          bio: 'A short india shorta delta echo that likes to eat bread.',
          skills: ['css', 'html'],
          interests: ['food', 'apple'],
          projects: 'An app that creates an interface for users.',
          majors: ['computer science'],
          url: '/user'
        },
        {
          id: 3,
          name: 'Bob',
          picture: logo,
          wanted: true,
          // projectWanted: true,
          bio: 'A short india shorta delta echo that likes to eat bread.',
          skills: ['css', 'html'],
          interests: ['food', 'apple'],
          projects: 'An app that creates an interface for users.',
          majors: ['computer science', 'mathematics'],
          url: '/user'
        },
        {
          id: 4,
          name: 'Clerk',
          picture: logo,
          wanted: true,
          // projectWanted: false,
          bio: 'A short india shorta delta echo that likes to eat bread.',
          skills: ['css', 'html'],
          interests: ['food', 'apple'],
          projects: 'An app that creates an interface for users.',
          majors: ['computer science'],
          url: '/user'
        }
      ]
    };
  }

  //Toggle unwanted

  unwantPerson(id) {
    this.setState({
      searchResults: this.state.searchResults.map(person => {
        person = Object.assign({}, person);
        if (person.id === id) {
          person.wanted = false;
        }
        return person;
      })
    });
    setTimeout(() => {
      // Remove person
      this.setState({
        searchResults: this.state.searchResults.filter(person => person.id !== id)
      })
    }, 600);
  }

  // markUnwantedProject(id) {
  //   this.setState({persons: this.state.persons.map(person => {
  //     if (person.id === id) {
  //       person.wanted = !person.wanted
  //     }
  //
  //     return person
  //   })});
  // }
  //
  //
  // markUnwantedPerson(id) {
  //   this.setState({persons: this.state.persons.map(person => {
  //     if (person.id === id) {
  //       person.wanted = !person.wanted
  //     }
  //
  //     return person
  //   })});
  // }
  //
  // delPerson(id) {
  //   this.setState({persons: [...this.state.persons.filter(person => person.id !== id)]});
  // }
  //
  // delProject(id) {
  //   this.setState({persons: [...this.state.persons.filter(person => person.id !== id)]});
  // }

  render() {
    return (
      <div className='home'>
        {this.state.searchResults.map((user, i) => (
          <SearchResult key={i}
            name={user.name} user={user}
            unwantPerson={this.unwantPerson.bind(this)} />
        ))}
      </div>
    );
  }
}
