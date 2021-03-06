import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Chapter extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			chapters: [],
			exercises: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:8080/getchapter/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					chapters: result
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

	render() {
		const { error, isLoaded, chapters, exercises } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					{chapters.map((item) => (
						<div className={'book'}>
							<Link to={`/book/${item.bookId}`}>Back</Link>
							<h1 key={item.title}>{item.title}</h1>
							<hr />
							<span>{item.description}</span>
							<ul />
						</div>
					))}
					{exercises.map((exercise) => (
						<div>
							<Link to={`/exercise/${exercise.id}`}>{exercise.title}</Link>
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

export default connect(mapStateToProps)(Chapter);
