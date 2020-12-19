import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateChapter extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			clicked: false,
			button: 'CREATE',
			error: null,
			title: null,
			number: null,
			description: null
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
			number: this.state.number,
			bookId: this.props.match.params.id
		};
		fetch('http://localhost:8080/addchaptertobook', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		//.then(this.props.history.push('/editbook/' + this.props.match.params.id));
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
							<Link to={'/editbook/' + this.props.match.params.id}>Back</Link>
							<br />
							<label>Title</label>
							<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
							<br />
							<label>Number</label>
							<input type="text" name="number" value={this.state.number} onChange={this.handleChange} />
							<br />
							<label>Description</label>
							<textarea name="description" value={this.state.description} onChange={this.handleChange} />
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

export default connect(mapStateToProps)(CreateChapter);
