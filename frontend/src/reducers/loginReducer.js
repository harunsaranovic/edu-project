const initialState = {
	isLogged: false,
	user: '',
	role: ''
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return action.payload;
		case 'LOGOUT':
			return initialState;
		default:
			return state;
	}
};

export default loginReducer;
