import React from 'react';
import { } from 'semantic-ui-react'
import SearchResult from './components/SearchResult';
import logo from './assets/logo.svg';

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [
        {
          id: 1,
          name: 'Foo',
          picture: logo,
          wanted: true,
          // projectWanted: true,
          description: 'A really good project',
          missingSkills: ['css', 'html'],
          topics: ['food', 'apple'],
          users: ['test1', 'test2', 'test3'],
          url: '/project'
        },
        {
          id: 2,
          name: 'Bar',
          picture: logo,
          wanted: true,
          // projectWanted: true,
          description: 'A really good project',
          missingSkills: ['css', 'html'],
          topics: ['food', 'apple'],
          users: ['test0'],
          url: '/project'
        },
        {
          id: 3,
          name: 'Project',
          picture: logo,
          wanted: true,
          // projectWanted: true,
          description: 'A really good project',
          missingSkills: ['css', 'html'],
          topics: ['food', 'apple'],
          users: ['test0'],
          url: '/project'
        }
      ]
    };
  }

  //Toggle unwanted

  unwantProject(id) {
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
        {this.state.searchResults.map((project, i) => (
          <SearchResult key={i}
            name={project.name} project={project}
            unwantProject={this.unwantProject.bind(this)} />
        ))}
      </div>
    );
  }
}
