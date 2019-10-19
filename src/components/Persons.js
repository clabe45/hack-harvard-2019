import React, { Component } from 'react';
import PersonsItems from './PersonsItems'

class DevNet extends Component {
  render() {
  	return this.props.persons.map((person) => (
  		<PersonsItems person={person}/>
  		));
}
}

export default DevNet;
