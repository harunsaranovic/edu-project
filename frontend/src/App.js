import React from 'react';
import Header from './components/Header.js';
import WhyUs from './components/why-us/WhyUs.js';
import Networks from './components/Networks.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />

			<div class="main">
				<div class="slogan">
					<h2>Evolution through innovation and visionary technology</h2>
					<h3>Some space for text with smaller size than the slogan is going to be needed</h3>
				</div>
				<div class="stake-mob display-mob">
					<p class="stake-now" id="mobstake2">
						<div id="go-net2">
							Stake Now<i class="fas fa-coins" />
						</div>
					</p>
				</div>
			</div>

			<Networks />
			<WhyUs />
			<Footer />
		</div>
	);
}

export default App;
