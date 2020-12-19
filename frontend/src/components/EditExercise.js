import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditExercise extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			title: null,
			description: null,
			number: null,
			clicked: false,
			button: 'UPDATE',
			questions: []
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	componentDidMount() {
		fetch('http://localhost:8080/getexercise/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					exerciseId: result[0].id,
					chapterId: result[0].chapterId,
					title: result[0].title,
					order: result[0].order,
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
		fetch('http://localhost:8080/getquestionsfromexercise/' + this.props.match.params.id)
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						questions: result
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
			id: this.state.exerciseId,
			title: this.state.title,
			order: this.state.order,
			description: this.state.description
		};
		fetch('http://localhost:8080/updateexercise', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		event.preventDefault();
	};

	render() {
		const { error, isLoaded, questions } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					<Link to={`/editchapter/${this.state.chapterId}`}>Back</Link>
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
							<label>Order</label>
							<br />
							<input type="number" name="order" value={this.state.order} onChange={this.handleChange} />
							<br />
						</div>

						<table className={'book-table'}>
							<tbody>
								{questions.map((question) => (
									<tr>
										<td key={question.title}>{question.title}</td>
										<td>
											<Link to={`/editquestion/${question.id}`}>Edit Question</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<Link to={'/createquestion/' + this.state.exerciseId}>Add a new question</Link>
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

export default connect(mapStateToProps)(EditExercise);
