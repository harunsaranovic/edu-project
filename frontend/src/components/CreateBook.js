import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateBook extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			title: null,
			description: null,
			color: null,
			clicked: false,
			button: 'CREATE'
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleCreate = (event) => {
		this.setState({ clicked: true, button: 'DONE' });
		var body = {
			title: this.state.title,
			description: this.state.description,
			color: this.state.color,
			teacherId: this.props.teacherId
		};
		fetch('http://localhost:8080/addbookteacher', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		event.preventDefault();
	};

	render() {
		const { error } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					<form onSubmit={this.handleCreate}>
						<div className={'book'}>
							<Link to={'/addbooks'}>Back</Link>
							<br />
							<br />
							<label>Title</label>
							<br />
							<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
							<br />
							<label>Description</label>
							<br />
							<textarea name="description" value={this.state.description} onChange={this.handleChange} />
							<br />
							<label>Color</label>
							<br />
							<input type="text" name="color" value={this.state.color} onChange={this.handleChange} />
						</div>
						<br />
						<input type="submit" disabled={this.state.clicked} value={this.state.button} />
					</form>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged,
		user: state.user,
		teacherId: state.id
	};
};

export default connect(mapStateToProps)(CreateBook);
