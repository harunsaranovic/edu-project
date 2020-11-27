const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const User = require('../models/user');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	insecureAuth: true
});

con.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');
});

router.get('/test', function(req, res) {
	User.findAll().then((result) => {
		res.send(result);
	});
});

router.get('/getbooks', function(req, res) {
	con.query('SELECT * FROM edu_project.books;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getbook/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.books WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getchapters', function(req, res) {
	con.query('SELECT * FROM edu_project.chapters;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getchapter/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.chapters WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getchaptersfrombook/:bookId', function(req, res) {
	con.query('SELECT * FROM edu_project.chapters WHERE bookId = ' + req.params.bookId + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getexercises', function(req, res) {
	con.query('SELECT * FROM edu_project.exercises;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getexercise/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.exercises WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getexercisesfromchapter/:chapterId', function(req, res) {
	con.query('SELECT * FROM edu_project.exercises WHERE chapterId = ' + req.params.chapterId + ';', function(
		err,
		result
	) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getquestions', function(req, res) {
	con.query('SELECT * FROM edu_project.questions;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getquestion/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.questions WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getquestionsfromexercise/:exerciseId', function(req, res) {
	con.query('SELECT * FROM edu_project.questions WHERE id = ' + req.params.exerciseId + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getanswers', function(req, res) {
	con.query('SELECT * FROM edu_project.answers;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getanswer/:id', function(req, res) {
	//con.query('SELECT * FROM edu_project.answer WHERE question_id = ' + req.params.id + ';', function(err, result) {
	con.query(
		'SELECT * FROM edu_project.questions LEFT JOIN edu_project.answers ON edu_project.questions.id = answers.questionId WHERE edu_project.questions.exerciseId = ' +
			req.params.id +
			';',
		function(err, result) {
			if (err) throw err;

			result.sort(function(a, b) {
				return a.questionId - b.questionId;
			});

			var response = [];
			var tempObject = [];
			var questionId = result[0].questionId;
			var questionTitle = result[0].title;
			result.forEach((element) => {
				if (element.questionId == questionId) {
					tempObject.push({
						answerId: element.id,
						text: element.text
					});
				} else {
					response.push({ questionId: questionId, questionTitle: questionTitle, answers: tempObject });
					tempObject = [];
					questionTitle = element.title;
					questionId = element.questionId;
					tempObject.push({
						answerId: element.id,
						text: element.text
					});
				}
			});
			response.push({ questionId: questionId, questionTitle: questionTitle, answers: tempObject });
			res.send(response);
		}
	);
});

router.get('/getquestionanswers/:questionId', function(req, res) {
	con.query('SELECT * FROM edu_project.answers WHERE questionId = ' + req.params.questionId + ';', function(
		err,
		result
	) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getteachers', function(req, res) {
	con.query('SELECT id, username FROM edu_project.teacher;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

module.exports = router;
