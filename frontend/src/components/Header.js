import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className={'logo'}>
					<h3>Logo</h3>
				</div>
				<div className={'header-links'}>
					{!this.props.user ? (
						<div>
							<div className={'header-link'}>
								<Link to="/login">Login</Link>
							</div>
							<div className={'header-link'}>
								<Link to="/register">Register</Link>
							</div>
						</div>
					) : (
						<div>
							<div className={'header-link'}>
								<Link to="/books">Books</Link>
							</div>
							<div className={'header-link'}>
								<Link onClick={this.props.logout} to="/login">
									Logout
								</Link>
							</div>
						</div>
					)}
				</div>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged,
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
			dispatch({
				type: 'LOGOUT'
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
