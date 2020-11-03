import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className={'logo'}>
					<h3>Logo</h3>
				</div>
				<div className={'header-links'}>
					<div className={'header-link'}>
						<Link to="/books">Books</Link>
					</div>
					<div className={'header-link'}>
						<Link to="/login">Login</Link>
					</div>
					<div className={'header-link'}>
						<Link to="/register">Register</Link>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
