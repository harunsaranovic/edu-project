import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: { email: '', username: '', password: '' }, error: '' };
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleRegister = (event) => {
		var _this = this;
		fetch('http://localhost:8080/register', {
			method: 'POST',
			body: JSON.stringify(this.state.user),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function(response) {
			if (response.status == 200) {
				response.json().then((json) => {
					console.log(json);
					_this.props.history.push('/login');
				});
			} else {
				response.json().then((json) => {
					console.log(json);
					_this.setState({ error: json.text });
				});
			}
		});
		event.preventDefault();
	};

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
						<form onSubmit={this.handleRegister}>
							<h4>Your Info</h4>
							<label>Email</label>
							<br />
							<input
								type="email"
								name="email"
								value={this.state.user.email}
								onChange={this.handleChange}
							/>
							<br />
							<label>Userame</label>
							<br />
							<input
								type="text"
								name="username"
								value={this.state.user.username}
								onChange={this.handleChange}
							/>
							<br />
							<label>Password</label>
							<br />
							<input
								type="password"
								name="password"
								value={this.state.user.password}
								onChange={this.handleChange}
							/>
							<br />
							<a className={'dangerText'}>{this.state.error}</a>
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
