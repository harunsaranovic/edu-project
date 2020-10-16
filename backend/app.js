const express = require('express');
const router = express.Router();
const app = express();
const port = 8080;
const cors = require('cors');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//Cors setup
app.use(cors());

//Load routes
const users = require('./routes/users');

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Node.js Server!');
};

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//flash
app.use(flash());

//express session middleware
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  })
);

//use routes
//app.use('/users', users);

app.get('/gettest', function(req, res) {
  res.send('app.get works');
});

app.post('/posttest', function(req, res) {
  res.send(req.body);
});

app.listen(port, () => console.log(`Application started at http://localhost:${port}`));