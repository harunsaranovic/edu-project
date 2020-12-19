import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateExercise extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			title: null,
			description: null,
			number: null,
			clicked: false,
			button: 'ADD',
			questions: []
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleCreate = (event) => {
		this.setState({ clicked: true, button: 'DONE' });
		var body = {
			chapterId: this.props.match.params.id,
			title: this.state.title,
			order: this.state.order,
			description: this.state.description
		};
		fetch('http://localhost:8080/createexercise', {
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
				<Link to={`/editchapter/${this.props.match.params.id}`}>Back</Link>
				<br />
				<br />
				<br />
				<form onSubmit={this.handleCreate}>
					<div className={'book'}>
						<label>Title</label>
						<br />
						<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
						<br />
						<label>Description</label>
						<br />
						<textarea name="description" value={this.state.description} onChange={this.handleChange} />
						<br />
						<label>Order</label>
						<br />
						<input type="number" name="order" value={this.state.order} onChange={this.handleChange} />
						<br />
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

export default connect(mapStateToProps)(CreateExercise);
