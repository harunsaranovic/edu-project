import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div class="logo">
					<h3>Logo</h3>
				</div>
				<div class="header-links">
					<div class="header-link">
						<Link to="/books">Books</Link>
					</div>
					<div class="header-link">
						<Link to="/login">Login</Link>
					</div>
					<div class="header-link">
						<Link to="/register">Register</Link>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
