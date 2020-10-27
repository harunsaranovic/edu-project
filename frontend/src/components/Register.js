import React from 'react';

class Register extends React.Component {
	render() {
		return (
			<div class="wrapper gray-bg">
				<div class="login-wrapper">
					<div class="login-image-placeholder" />
					<div class="login-form">
						<h3>Lorem ipsum dolor sit amet</h3>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum sapien vitae
							massa imperdiet viverra.
						</span>
						<form>
							<h4>Your Info</h4>
							<label>Name</label>
							<br />
							<input type="text" name="name" />
							<br />
							<label>Userame</label>
							<br />
							<input type="text" name="username" />
							<br />
							<label>Password</label>
							<br />
							<input type="password" name="password" />
							<br />
							<br />
							<input type="submit" value="Register" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
