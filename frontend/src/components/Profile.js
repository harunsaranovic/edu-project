import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = { teachers: [], error: '' };
	}
	componentDidMount() {
		fetch('http://localhost:8080/getteachers').then((res) => res.json()).then(
			(result) => {
				this.setState({
					teachers: result
				});
			},
			(error) => {
				this.setState({
					error: error
				});
			}
		);
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleProfile = (event) => {
		var _this = this;
		fetch('http://localhost:8080/profile', {
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
			<div className={'wrapper gray-bg'}>
				<div className={'login-wrapper'}>
					<div className={'login-image-placeholder'} />
					<div className={'login-form'}>
						<h3>Edit your profile</h3>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum sapien vitae
							massa imperdiet viverra.
						</span>
						<form onSubmit={this.handleProfile}>
							<h4>Your Info</h4>
							<br />
							<label>Userame</label>
							<br />
							<h1>{this.props.user}</h1>
							<br />
							<label>Email</label>
							<br />
							<input type="email" name="email" value={this.props.email} onChange={this.handleChange} />
							<br />
							<label>First name</label>
							<br />
							<input
								type="text"
								name="firstName"
								value={this.props.firstName}
								onChange={this.handleChange}
							/>
							<br />
							<label>Last name</label>
							<br />
							<input
								type="text"
								name="lastName"
								value={this.props.lastName}
								onChange={this.handleChange}
							/>
							<br />
							{this.props.role == 'STUDENT' ? (
								<div>
									<label>Teacher</label>

									<br />
									<select id="teachers" name="teacher" value={''} onChange={this.handleChange}>
										{this.state.teachers.map((item) => (
											<option value={item.id}>{item.username}</option>
										))}
									</select>
									<br />
								</div>
							) : (
								''
							)}
							<a className={'dangerText'}>{this.state.error}</a>
							<br />
							<br />
							<input type="submit" value="Update" />
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
		user: state.user,
		email: state.email,
		teacher: state.teacher,
		firstName: state.firstName,
		lastName: state.lastName,
		role: state.role
	};
};

export default connect(mapStateToProps)(Profile);
