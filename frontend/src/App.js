import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Books from './components/Books.js';
import Book from './components/Book.js';
import Chapter from './components/Chapter.js';
import Exercise from './components/Exercise.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/books" component={Books} />
				<Route path="/book/:id" component={Book} />
				<Route path="/chapter/:id" component={Chapter} />
				<Route path="/exercise/:id" component={Exercise} />
			</Switch>
		</div>
	);
}

export default App;
