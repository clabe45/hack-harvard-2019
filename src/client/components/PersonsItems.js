import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class PersonsItems extends Component {
	
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			textDecoration: this.props.person.wanted ?
			'none' : 'line-through'
		}
	}


	render() {

		const { id, name, description} = this.props.person;



		return (
			<div style={this.getStyle()}>

			<p>
			<input type="checkbox" onChange={this.props.markUnwantedPerson.bind
				(this, id)}/> 
			{' '}

			{ name }

			


			</p>
			<p>{ description }</p>

			<button onClick={this.props.delPerson.bind
				(this, id)}>Remove</button>

				
			</div>
		)
	}
}


PersonsItems.propTypes = {

	person: PropTypes.array.isRequired

}



export default PersonsItems