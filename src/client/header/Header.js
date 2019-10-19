import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (

		<header>
		<h1>DevNet </h1>
		<Link to="/">Home</Link>
		<Link to="/messages">Messages</Link>
		<Link to="/projects">Projects</Link>

		</header>


		)
}

export default Header;