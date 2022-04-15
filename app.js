var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Drum = require("./models/drums.model");
const mongoose = require("mongoose");

const keyboard = require("./models/keyboard.model");

const Guitar = require("./models/Guitar.models")


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.get("/", function (req, res, next) {
  res.render("index", { title: "Instrumental" });
});

app.get("/keyboard", function (req, res, next) {
  keyboard.find()
    .then(function (results) {
      console.log("Success!", results);
      res.render("keyboard", {keyboard: results});
    })
    .catch(function (err) {
      console.log("Something went wrong", err.message);
    });
});

app.post("/keyboard", function(req, res, next){
  keyboard.create({
    image: req.body.image,
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    new: req.body.new,
    used: req.body.used,
  })
  .then(function (createdKeyboard) {
    res.json(createdKeyboard);
  })
  .catch(function (error) {
    res.json(error.message);
  });
});

app.get("/drums", function (req, res, next) {

  Drum.find()
    .then(function (foundDrum) {
      console.log("We found a drum", foundDrum);
      res.render("drums", {drums: foundDrum});
    })
    .catch(function (err) {
      console.log("Something went wrong", err.message);
    });
});






app.get("/", function (req, res, next) {
  res.render("index", { title: "Instrumental" });
});

app.get("/guitars", function (req, res, next) {
  Guitar.find()
    .then(function (results){
      console.log('Success!', results); 
      res.render("guitars", { guitars: results });
    })
    .catch(function (err) {
      console.log("Something went wrong", err.message);
    });
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


mongoose 
  .connect("mongodb://localhost/instrumental")
  .then((x)  =>

    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));


module.exports = app;
