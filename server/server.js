const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(cors());

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'Application/JSON');
  next();
});

app.get('*', (req, res) => {
  res.statusCode = 404;
  res.send({'message': '404 Error, Page not found.'})
})

module.exports = app;