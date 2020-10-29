import React from 'react';
import { Link } from 'react-router-dom';

class Exercise extends React.Component {
	constructor(props) {
		super(props);
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
				<div class="wrapper">
					{exercises.map((item) => (
						<div className={'book'}>
							<Link to={`/chapter/${item.chapter_id}`}>Back</Link>
							<h1 key={item.title}>{item.title}</h1>
							<hr />
							<span>{item.description}</span>
							<ul />
						</div>
					))}
					{questions.map((question) => (
						<div>
							<h5>{question.title}</h5>
						</div>
					))}
				</div>
			);
		}
	}
}

export default Exercise;
