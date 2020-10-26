import React from 'react';

class Networks extends React.Component {
	render() {
		return (
			<div class="networks" id="networks">
				<h2 id="networks-header">Networks</h2>

				<div class="data" id="data">
					<div class="bck">
						<a id="back">
							<i class="fas fa-chevron-left" /> Go Back
						</a>
					</div>
					<div class="token-name">
						<h3 class="project-name" id="project-name">
							COSMOS
						</h3>
						<h3 class="token" id="token">
							ATOM
						</h3>
					</div>
					<div class="reward-comission">
						<div class="row">
							<div class="col-3">
								<h6>Expected Reward Date</h6>
								<h5 id="expected-reward-date">0%</h5>
							</div>
							<div class="col-3">
								<h6>Comission</h6>
								<h5 id="comission">0%</h5>
							</div>
						</div>
					</div>

					<div class="range">
						<div class="">
							<h5 id="del-am-label">Delegated ATOM Amount</h5>
							<input type="number" name="" id="delegated-amount" value={'1000'} />
						</div>
						<input type="range" min="1" max="1000000" value="1000" class="slider" id="ranger" />
					</div>

					<div class="calculated">
						<div class="row">
							<div class="col-4">
								<h6>Holdings Value</h6>
								<h5 id="holdings-value">0$</h5>
							</div>
							<div class="col-4">
								<h6 id="price-label">ATOM Price</h6>
								<h5 id="price">0%</h5>
							</div>
							<div class="col-4">
								<h6>Annual Reward Rate</h6>
								<h5 id="annual-reward-rate">0%</h5>
							</div>
							<div class="col-4">
								<h6>Estimated Net Daily Rewards</h6>
								<h5 id="daily-result">0 </h5>
								<h4 id="daily-result-dol">$ 0.00</h4>
							</div>
							<div class="col-4">
								<h6>Estimated Net Monthly Rewards</h6>
								<h5 id="monthly-result">0 </h5>
								<h4 id="monthly-result-dol">$ 0.00</h4>
							</div>
							<div class="col-4">
								<h6>Estimated Net Annual Rewards</h6>
								<h5 id="annual-result">0 </h5>
								<h4 id="annual-result-dol">$ 0.00</h4>
							</div>
						</div>
						<div class="validator">
							<h6>Validator Address</h6>
							<h5 id="validator-address">examplecosmosasdfghjkqwertzuixcvbn</h5>
							<a class="copy-address" id="copy-address">
								<div>
									Copy Address <i class="far fa-clone" />
								</div>
							</a>
							<a class="stake-now" id="lets-stake">
								<div>
									Stake Now<i class="fas fa-coins" />
								</div>
							</a>
						</div>
					</div>
				</div>

				<div class="networks-grid">
					<div class="network active activeNetwork" id="cosmos">
						<div class="icon">
							<img src="img/networks/cosmos.svg" alt="" />
						</div>
						<h3>COSMOS</h3>
						<div class="status">
							<div class="live" />
							<span>Network is live</span>
						</div>
						<span id="cosmos-com" class="perc">
							%
						</span>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network active activeNetwork" id="iris">
						<div class="icon">
							<img src="img/networks/irisnet.png" alt="" />
						</div>
						<h3>IRISNET</h3>
						<div class="status">
							<div class="live" />
							<span>Network is live</span>
						</div>
						<span id="iris-com" class="perc">
							%
						</span>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network active activeNetwork" id="terra">
						<div class="icon">
							<img src="img/networks/terra.svg" alt="" />
						</div>
						<h3>TERRA</h3>
						<div class="status">
							<div class="live" />
							<span>Network is live</span>
						</div>
						<span id="terra-com" class="perc">
							%
						</span>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network active activeNetwork" id="kava">
						<div class="icon">
							<img src="img/networks/kava.svg" alt="" />
						</div>
						<h3>KAVA</h3>
						<div class="status">
							<div class="live" />
							<span>Network is live</span>
						</div>
						<span id="kava-com" class="perc">
							%
						</span>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network active activeNetwork" id="kusama">
						<div class="icon">
							<img src="img/networks/kusama.svg" alt="" />
						</div>
						<h3>KUSAMA</h3>
						<div class="status">
							<div class="live" />
							<span>Network is live</span>
						</div>
						<span id="kusama-com" class="perc">
							%
						</span>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network inactive">
						<div class="icon">
							<img src="img/networks/solana.svg" alt="" />
						</div>
						<h3>SOLANA</h3>
						<div class="status">
							<div class="live non-live" />
							<span>Network is in development</span>
						</div>
						<a class="com-soon">COMING SOON</a>
						<span class="click-for-more">Click for more</span>
					</div>

					<div class="network inactive">
						<div class="icon">
							<img src="img/networks/regen.png" alt="" />
						</div>
						<h3>REGEN</h3>
						<div class="status">
							<div class="live non-live" />
							<span>Network is in development</span>
						</div>
						<a class="com-soon">COMING SOON</a>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network inactive">
						<div class="icon">
							<img src="img/networks/nucypher.png" alt="" />
						</div>
						<h3>NUCYPHER</h3>
						<div class="status">
							<div class="live non-live" />
							<span>Network is in development</span>
						</div>
						<a class="com-soon">COMING SOON</a>
						<span class="click-for-more">Click for more</span>
					</div>

					<div class="network inactive">
						<div class="icon">
							<img src="img/networks/ethereum.png" alt="" />
						</div>
						<h3>ETHEREUM</h3>
						<div class="status">
							<div class="live non-live" />
							<span>Network is in development</span>
						</div>
						<a class="com-soon">COMING SOON</a>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network inactive">
						<div class="icon">
							<img src="img/networks/polkadot.svg" alt="" />
						</div>
						<h3>POLKADOT</h3>
						<div class="status">
							<div class="live non-live" />
							<span>Network is in development</span>
						</div>
						<a class="com-soon">COMING SOON</a>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network inactive">
						<div class="icon">
							<img src="img/networks/skale.png" alt="" />
						</div>
						<h3>SKALE</h3>
						<div class="status">
							<div class="live non-live" />
							<span>Network is in development</span>
						</div>
						<a class="com-soon">COMING SOON</a>
						<span class="click-for-more">Click for more</span>
					</div>
					<div class="network inactive">
						<div class="icon">
							<img src="img/networks/playlist.png" alt="" />
						</div>
						<h3>PLAYLIST</h3>
						<div class="status">
							<div class="live non-live" />
							<span>Network is in development</span>
						</div>
						<a class="com-soon">COMING SOON</a>
						<span class="click-for-more">Click for more</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Networks;
