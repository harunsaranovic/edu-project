import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateAnswer extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			text: '',
			correct: false,
			clicked: false,
			button: 'ADD'
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

	componentDidMount() {}

	handleAdd = (event) => {
		this.setState({ clicked: true, button: 'DONE' });
		var body = {
			questionId: this.props.match.params.id,
			text: this.state.text,
			correct: this.state.correct
		};
		fetch('http://localhost:8080/addanswer', {
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

		return (
			<div className={'block-wrapper'}>
				<Link to={`/editquestion/${this.props.match.params.id}`}>Back</Link>
				<br />
				<br />
				<br />
				<form onSubmit={this.handleAdd}>
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

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged,
		user: state.user
	};
};

export default connect(mapStateToProps)(CreateAnswer);
