import React from 'react';
import { Link } from 'react-router-dom';

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			books: [],
			chapters: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:8080/getbook/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					books: result
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
		fetch('http://localhost:8080/getchaptersfrombook/' + this.props.match.params.id).then((res) => res.json()).then(
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
	}

	render() {
		const { error, isLoaded, books, chapters } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div class="block-wrapper">
					{books.map((item) => (
						<div className={'book'}>
							<Link to={`/books`}>Back</Link>
							<h1 key={item.title}>{item.title}</h1>
							<hr />
							<span>{item.description}</span>
							<ul />
						</div>
					))}
					{chapters.map((chapter) => (
						<div>
							<Link to={`/chapter/${chapter.id}`}>{chapter.title}</Link>
						</div>
					))}
				</div>
			);
		}
	}
}

export default Book;
