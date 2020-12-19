import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Books from './components/Books.js';
import Book from './components/Book.js';
import Chapter from './components/Chapter.js';
import Exercise from './components/Exercise.js';
import Profile from './components/Profile.js';
import AddBooks from './components/AddBooks.js';
import EditBook from './components/EditBook.js';
import CreateBook from './components/CreateBook.js';
import CreateChapter from './components/CreateChapter.js';
import EditChapter from './components/EditChapter.js';
import EditExercise from './components/EditExercise.js';
import EditQuestion from './components/EditQuestion.js';
import EditAnswer from './components/EditAnswer.js';
import CreateAnswer from './components/CreateAnswer.js';
import CreateQuestion from './components/CreateQuestion.js';
import CreateExercise from './components/CreateExercise.js';
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
				<Route path="/profile" component={Profile} />
				<Route path="/addbooks" component={AddBooks} />
				<Route path="/editbook/:id" component={EditBook} />
				<Route path="/createbook" component={CreateBook} />
				<Route path="/createchapter/:id" component={CreateChapter} />
				<Route path="/editchapter/:id" component={EditChapter} />
				<Route path="/editexercise/:id" component={EditExercise} />
				<Route path="/editquestion/:id" component={EditQuestion} />
				<Route path="/editanswer/:id" component={EditAnswer} />
				<Route path="/createanswer/:id" component={CreateAnswer} />
				<Route path="/createquestion/:id" component={CreateQuestion} />
				<Route path="/createexercise/:id" component={CreateExercise} />
			</Switch>
		</div>
	);
}

export default App;
