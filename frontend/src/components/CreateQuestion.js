import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateQuestion extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			title: null,
			clicked: false,
			button: 'UPDATE',
			answers: []
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	componentDidMount() {}

	handleCreate = (event) => {
		this.setState({ clicked: true, button: 'DONE' });
		var body = {
			exerciseId: this.props.match.params.id,
			title: this.state.title
		};
		fetch('http://localhost:8080/addquestion', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		event.preventDefault();
	};

	render() {
		return (
			<div className={'block-wrapper'}>
				<Link to={`/editexercise/${this.props.match.params.id}`}>Back</Link>
				<br />
				<br />
				<br />
				<form onSubmit={this.handleCreate}>
					<div className={'book'}>
						<label>Title</label>
						<br />
						<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
					</div>
					<br />
					<br />
					<input type="submit" disabled={this.state.clicked} value={this.state.button} />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged,
		user: state.user
	};
};

export default connect(mapStateToProps)(CreateQuestion);
