import React from 'react';
import logo from '../img/logo-white.svg';
import ScriptTag from 'react-script-tag';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div class="logo">
					<img src={{ logo }} id="logo" alt="Chainode Logo" />
				</div>
				<div class="header-links">
					<div class="header-link">
						<p id="d-home">Home</p>
					</div>
					<div class="header-link">
						<p id="d-networks">Networks</p>
					</div>
					<div class="header-link">
						<p id="d-services">Services</p>
					</div>
					<div class="header-link">
						<p id="d-about">About Us</p>
					</div>
					<div class="header-link">
						<p id="d-contact">Contact Us</p>
					</div>
					<div class="header-link" id="snhd">
						<p class="stake-now">
							<div id="go-net">
								Stake Now<i class="fas fa-coins" />
							</div>
						</p>
					</div>
				</div>
				<ScriptTag type="text/javascript" src="../scripts/jquery-ui-1.12.1/external/jquery/jquery.js" />
				<ScriptTag type="text/javascript" src="../scripts/jquery-ui-1.12.1/jquery-ui.min.js" />
				<ScriptTag type="text/javascript" src="../scripts/script.js" />
				<ScriptTag type="text/javascript" src="../particles/particles.js" />
				<ScriptTag type="text/javascript" src="../particles/app.js" />
			</header>
		);
	}
}

export default Header;
