import React from 'react';
import { Link, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: 'bob', password: 'password', error: '' };
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleLogin = (event) => {
		var _this = this;
		fetch('http://localhost:8080/login', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function(response) {
			if (response.status == 200) {
				response.json().then((json) => {
					console.log(json);
					_this.props.login(json);
					_this.props.history.push('/books');
				});
			} else {
				_this.setState({ error: ' Wrong login info.' });
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
							massa imperdiet viverra. Vivamus ultrices, tellus sed posuere consequat, mi nulla tincidunt
							tellus, sed ullamcorper ex tellus at leo. Nullam egestas ornare lectus vitae convallis.
							Nullam ultrices, nisl in elementum finibus.
						</span>
						<form onSubmit={this.handleLogin}>
							<h4>Your account</h4>
							<label>Username</label>
							<br />
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								placeholder="Username"
							/>
							<br />
							<label>Password</label>
							<br />
							<input
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
								placeholder="Password"
							/>
							<br />
							<a className={'dangerText'}>{this.state.error}</a>
							<br />
							<a>Forgot you password?</a>
							<br />
							<br />
							<input type="submit" value="Sign in" />
							<br />

							<Link to="/register" className="create-account-link">
								No account? Register here!
							</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged,
		username: state.username
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (data) => {
			dispatch({
				type: 'LOGIN',
				payload: {
					isLogged: true,
					id: data.id,
					user: data.user,
					email: data.email,
					teacher: data.teacher,
					role: data.role,
					firstName: data.firstName,
					lastName: data.lastName
				}
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
