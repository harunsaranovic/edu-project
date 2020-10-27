import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div class="logo">
					<h3>Logo</h3>
				</div>
				<div class="header-links">
					<div class="header-link">
						<p id="d-home">Home</p>
					</div>
					<div class="header-link">
						<p id="d-networks">Empty</p>
					</div>
					<div class="header-link">
						<p id="d-services">Login</p>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
