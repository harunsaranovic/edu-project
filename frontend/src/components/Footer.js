import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div class="row">
					<div class="col-6">
						<h4>Join our community </h4>
						<a href="">
							{' '}
							<i class="fab fa-telegram-plane" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-twitter" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-facebook-f" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-instagram" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-linkedin-in" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-github" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-pinterest" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-skype" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-discord" />{' '}
						</a>
					</div>
					<div class="col-6">
						<h4>Check our content</h4>
						<a href="">
							{' '}
							<i class="fab fa-youtube" />{' '}
						</a>
						<a href="">
							{' '}
							<i class="fab fa-medium-m" />{' '}
						</a>
					</div>
				</div>
				<h6>Copyright &copy; 2020 Chainode Tech</h6>
			</footer>
		);
	}
}

export default Footer;
