import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditQuestion extends React.Component {
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

	componentDidMount() {
		fetch('http://localhost:8080/getquestion/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					questionId: result[0].id,
					exerciseId: result[0].exerciseId,
					title: result[0].title
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
		fetch('http://localhost:8080/getquestionanswers/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					answers: result
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
			id: this.state.questionId,
			title: this.state.title
		};
		fetch('http://localhost:8080/updatequestion', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		event.preventDefault();
	};

	render() {
		const { error, isLoaded, answers } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					<Link to={`/editexercise/${this.state.exerciseId}`}>Back</Link>
					<br />
					<br />
					<br />
					<form onSubmit={this.handleUpdate}>
						<div className={'book'}>
							<label>Title</label>
							<br />
							<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
						</div>

						<table className={'book-table'}>
							<tbody>
								{answers.map((answer) => (
									<tr>
										<td>{answer.correct}</td>
										<td key={answer.text}>{answer.text}</td>
										<td>
											<Link to={`/editanswer/${answer.id}`}>Edit Answer</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<Link to={'/createanswer/' + this.state.questionId}>Add a new answer</Link>
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

export default connect(mapStateToProps)(EditQuestion);
