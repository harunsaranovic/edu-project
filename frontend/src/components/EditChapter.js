import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditChapter extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			title: null,
			chapterId: null,
			bookId: null,
			description: null,
			number: null,
			clicked: false,
			button: 'UPDATE',
			exercises: []
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	componentDidMount() {
		fetch('http://localhost:8080/getchapter/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					chapterId: result[0].id,
					bookId: result[0].id,
					title: result[0].title,
					number: result[0].number,
					description: result[0].description
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
		fetch('http://localhost:8080/getexercisesfromchapter/' + this.props.match.params.id)
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						exercises: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	handleUpdate = (event) => {
		this.setState({ clicked: true, button: 'DONE' });
		var body = {
			id: this.state.chapterId,
			title: this.state.title,
			number: this.state.number,
			description: this.state.description
		};
		fetch('http://localhost:8080/updatechapter', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		event.preventDefault();
	};

	render() {
		const { error, isLoaded, exercises } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					<Link to={`/editbook/${this.state.bookId}`}>Back</Link>
					<br />
					<br />
					<br />
					<form onSubmit={this.handleUpdate}>
						<div className={'book'}>
							<label>Title</label>
							<br />
							<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
							<br />
							<label>Description</label>
							<br />
							<textarea name="description" value={this.state.description} onChange={this.handleChange} />
							<br />
							<label>Number</label>
							<br />
							<input type="number" name="title" value={this.state.number} onChange={this.handleChange} />
						</div>

						<table className={'book-table'}>
							<tbody>
								{exercises.map((exercise) => (
									<tr>
										<td key={exercise.title}>{exercise.title}</td>
										<td>
											<Link to={`/editexercise/${exercise.id}`}>Edit Exercise</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<Link to={'/createexercise/' + this.state.chapterId}>Add a new exercise</Link>
						<br />
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
		user: state.user
	};
};

export default connect(mapStateToProps)(EditChapter);
