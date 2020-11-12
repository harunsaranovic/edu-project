import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Exercise extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			exercises: [],
			questions: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:8080/getexercise/' + this.props.match.params.id).then((res) => res.json()).then(
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
		fetch('http://localhost:8080/getanswer/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				console.log(result);
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

	render() {
		const { error, isLoaded, exercises, questions } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					{exercises.map((item) => (
						<div className={'book'}>
							<Link to={`/chapter/${item.chapter_id}`}>Back</Link>
							<h1 key={item.title}>{item.title}</h1>
							<hr />
							<span>{item.description}</span>
						</div>
					))}
					{questions.map((question) => (
						<div className={'questions'}>
							<h5>{question.questionTitle}</h5>
							{question.answers.map((answer) => (
								<ul>
									<li>
										<input type="checkbox" />
										<span>{answer.text}</span>
									</li>
								</ul>
							))}
						</div>
					))}
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

export default connect(mapStateToProps)(Exercise);
