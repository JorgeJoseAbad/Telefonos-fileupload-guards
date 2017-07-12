var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan     = require('morgan');
const cors      = require('cors');
const multer  = require('multer');

var index = require('./routes/index');
var phones = require('./routes/phones');

//const images=require('./public/uploads');

// database connection
require('./configs/database');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  morgan(`Request Method: :method, Request URL: :url, Response Time: :response-time(ms)`));

  var whitelist = [
      'http://localhost:4200',
  ];

  var corsOptions = {
      origin: function(origin, callback){
          var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
          callback(null, originIsWhitelisted);
      },
      credentials: true
  };
  app.use(cors(corsOptions));


  
app.use('/api/phones', phones);
app.use('/', index);
app.use('/api', phones);



// This will be the default route is nothing else is caught
app.use(function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.use(function (req,res){
  console.log("paso por qui");
  console.log(req.body.image);
  res.sendFile(__dirname+`'/public/uploads/${req.body.image}'`);
}); //intento por acceder a la carpeta de imagenes

// This will be the default route is nothing else is caught
app.use(function(req, res) {
  console.log('paso por aqui');
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
