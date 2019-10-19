import React, { Component } from 'react';
import PersonsItems from './PersonsItems'
import PropTypes from 'prop-types';




class Persons extends Component {
 
  render() {
  	return this.props.persons.map((person) => (
  		<PersonsItems key={person.id} person={person} markUnwanted={this.props.markUnwanted}/>
  		));
}

}



Persons.propTypes = {

	persons: PropTypes.array.isRequired

}


export default Persons;
