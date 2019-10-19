import React, { Component } from 'react'

export class PersonsItems extends Component {
	render() {
		return (
			<div>

			<p>{ this.props.person.name }</p>
				
			</div>
		)
	}
}

export default PersonsItems