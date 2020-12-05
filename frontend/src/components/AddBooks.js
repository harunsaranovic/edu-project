import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AddBooks extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			books: []
		};
	}
	componentDidMount() {
		console.log(this.props.id);
		fetch('http://localhost:8080/getmybooks/' + this.props.id).then((res) => res.json()).then(
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
				<div className={'book-list'}>
					<Link to={'/createbook'}>Create new book</Link>
					<table className={'book-table'}>
						<tbody>
							{books.map((item) => (
								<tr>
									<td key={item.title}>{item.title}</td>
									<td key={item.status}>{item.status}</td>
									<td>
										<Link to={`/editbook/${item.id}`}>Edit book</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged,
		id: state.id,
		user: state.user
	};
};

export default connect(mapStateToProps)(AddBooks);
