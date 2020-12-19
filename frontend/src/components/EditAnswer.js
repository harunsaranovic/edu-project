import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditAnswer extends React.Component {
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

	toggleCheckboxChange = () => {
		const { handleCheckboxChange } = this.props;

		this.setState(({ correct }) => ({
			correct: !correct
		}));
	};

	componentDidMount() {
		fetch('http://localhost:8080/getsingleanswer/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					answerId: result[0].id,
					questionId: result[0].questionId,
					text: result[0].text,
					correct: result[0].correct
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
			id: this.state.answerId,
			text: this.state.text,
			correct: this.state.correct
		};
		console.log(body);

		fetch('http://localhost:8080/updateanswer', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		event.preventDefault();
	};

	render() {
		const { error, isLoaded } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					<Link to={`/editquestion/${this.state.questionId}`}>Back</Link>
					<br />
					<br />
					<br />
					<form onSubmit={this.handleUpdate}>
						<div className={'book'}>
							<label>Text</label>
							<br />
							<input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
							<br />
							<label>Correct</label>
							<br />
							<input
								type="checkbox"
								name="correct"
								checked={this.state.correct}
								onChange={this.toggleCheckboxChange}
							/>
						</div>

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

export default connect(mapStateToProps)(EditAnswer);
