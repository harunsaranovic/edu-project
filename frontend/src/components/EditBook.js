import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditBook extends React.Component {
	constructor(props) {
		super(props);
		if (!props.isLogged) props.history.push('/login');
		this.state = {
			error: null,
			isLoaded: false,
			title: null,
			description: null,
			chapters: []
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	componentDidMount() {
		fetch('http://localhost:8080/getbook/' + this.props.match.params.id).then((res) => res.json()).then(
			(result) => {
				this.setState({
					isLoaded: true,
					bookId: result[0].id,
					title: result[0].title,
					status: result[0].status,
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

	handleUpdate = (event) => {
		var body = {
			id: this.state.bookId,
			title: this.state.title,
			description: this.state.description
		};
		fetch('http://localhost:8080/updatebook', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		event.preventDefault();
	};

	hanldePublishReq = (event) => {
		fetch('http://localhost:8080/requestbookpublishing/' + this.state.bookId);
	};

	render() {
		const { error, isLoaded, books, chapters } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className={'block-wrapper'}>
					<Link to={'/createchapter'}>Add a new chapter</Link>
					<form onSubmit={this.handleUpdate}>
						<div className={'book'}>
							<Link to={'/addbooks'}>Back</Link>
							<label>Title</label>
							<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
							<label>Title</label>
							<textarea name="description" value={this.state.description} onChange={this.handleChange} />
						</div>

						<table className={'book-table'}>
							<tbody>
								{chapters.map((chapter) => (
									<tr>
										<td key={chapter.title}>{chapter.title}</td>
										<td>
											<Link to={`/editchapter/${chapter.id}`}>Edit Chapter</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<br />
						<input type="submit" value="Update" />
						{this.state.status == 'WRITING' ? <a onClick={this.hanldePublishReq}>Publish</a> : ''}
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

export default connect(mapStateToProps)(EditBook);
