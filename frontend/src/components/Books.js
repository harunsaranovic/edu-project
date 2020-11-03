import React from 'react';
import { Link } from 'react-router-dom';

class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			books: []
		};
	}
	componentDidMount() {
		fetch('http://localhost:8080/getbooks').then((res) => res.json()).then(
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
	}

	render() {
		const { error, isLoaded, books } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'wrapper book-grid'}>
					{books.map((item) => (
						<Link to={`/book/${item.id}`}>
							<div className={`book-card ${item.color}`}>
								<h1 key={item.title}>{item.title}</h1>
							</div>
						</Link>
					))}
				</div>
			);
		}
	}
}

export default Books;
