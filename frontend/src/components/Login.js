import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	render() {
		return (
			<div class="wrapper gray-bg">
				<div class="login-wrapper">
					<div class="login-image-placeholder" />
					<div class="login-form">
						<h3>Lorem ipsum dolor sit amet</h3>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum sapien vitae
							massa imperdiet viverra. Vivamus ultrices, tellus sed posuere consequat, mi nulla tincidunt
							tellus, sed ullamcorper ex tellus at leo. Nullam egestas ornare lectus vitae convallis.
							Nullam ultrices, nisl in elementum finibus.
						</span>
						<form>
							<h4>Your account</h4>
							<input type="text" name="username" />
							<br />
							<input type="password" name="password" />
							<br />
							<a>Forgot you password?</a>
							<br />
							<br />
							<input type="submit" value="Sign in" />
							<br />

							<Link to="/register" className="create-account-link">
								Create account here
							</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
