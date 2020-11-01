const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const Student = require('../models/student');

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
	Student.findOne({
		where: { id: '1' }
	}).then((result) => {
		res.send(result);
	});
});

router.get('/getbooks', function(req, res) {
	con.query('SELECT * FROM edu_project.book;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getbook/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.book WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getchapters', function(req, res) {
	con.query('SELECT * FROM edu_project.chapter;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getchapter/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.chapter WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getchaptersfrombook/:bookId', function(req, res) {
	con.query('SELECT * FROM edu_project.chapter WHERE book_id = ' + req.params.bookId + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getexercises', function(req, res) {
	con.query('SELECT * FROM edu_project.exercise;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getexercise/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.exercise WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getexercisesfromchapter/:chapterId', function(req, res) {
	con.query('SELECT * FROM edu_project.exercise WHERE chapter_id = ' + req.params.chapterId + ';', function(
		err,
		result
	) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getquestions', function(req, res) {
	con.query('SELECT * FROM edu_project.question;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getquestion/:id', function(req, res) {
	con.query('SELECT * FROM edu_project.question WHERE id = ' + req.params.id + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getquestionsfromexercise/:exerciseId', function(req, res) {
	con.query('SELECT * FROM edu_project.question WHERE id = ' + req.params.exerciseId + ';', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getanswers', function(req, res) {
	con.query('SELECT * FROM edu_project.answer;', function(err, result) {
		if (err) throw err;
		res.send(result);
	});
});

router.get('/getanswer/:id', function(req, res) {
	//con.query('SELECT * FROM edu_project.answer WHERE question_id = ' + req.params.id + ';', function(err, result) {
	con.query(
		'SELECT * FROM edu_project.question LEFT JOIN edu_project.answer ON edu_project.question.id = answer.question_id WHERE edu_project.question.id = ' +
			req.params.id +
			';',
		function(err, result) {
			if (err) throw err;

			result.sort(function(a, b) {
				return a.question_id - b.question_id;
			});

			var response = [];
			var tempObject = [];
			var questionId = result[0].question_id;
			var questionTitle = result[0].title;
			result.forEach((element) => {
				if (element.question_id == questionId) {
					tempObject.push({
						answer_id: element.id,
						text: element.text
					});
				} else {
					response.push({ questionId: questionId, questionTitle: questionTitle, answers: tempObject });
					tempObject = [];
					questionTitle = element.title;
					questionId = element.question_id;
					tempObject.push({
						answer_id: element.id,
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
	con.query('SELECT * FROM edu_project.answer WHERE question_id = ' + req.params.questionId + ';', function(
		err,
		result
	) {
		if (err) throw err;
		res.send(result);
	});
});

module.exports = router;
