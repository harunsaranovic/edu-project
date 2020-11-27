import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: '', firstName: '', lastName: '', username: '', password: '', error: '' };
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleRegister = (event) => {
		var _this = this;
		fetch('http://localhost:8080/register', {
			method: 'POST',
			body: JSON.stringify(this.state),
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
			<div className={'wrapper gray-bg'}>
				<div className={'login-wrapper'}>
					<div className={'login-image-placeholder'} />
					<div className={'login-form'}>
						<h3>Lorem ipsum dolor sit amet</h3>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum sapien vitae
							massa imperdiet viverra.
						</span>
						<form onSubmit={this.handleRegister}>
							<h4>Your Info</h4>
							<label>Userame</label>
							<br />
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<br />
							<label>Email</label>
							<br />
							<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
							<br />
							<label>First name</label>
							<br />
							<input
								type="text"
								name="firstName"
								value={this.state.firstName}
								onChange={this.handleChange}
							/>
							<br />
							<label>Last name</label>
							<br />
							<input
								type="text"
								name="lastName"
								value={this.state.lastName}
								onChange={this.handleChange}
							/>
							<br />

							<label>Password</label>
							<br />
							<input
								type="password"
								name="password"
								value={this.state.password}
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
