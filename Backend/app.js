const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
 const { keys } = require('./config')
const db = require('./models')
const passport = require('passport')
const cors=require('cors')

const { authRouter,
  usersRouter,
   hotelRouter} = require('./routes')

  // const hotelRouter =require('./routes/hotels') 

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

app.use(cors());

// db config 
db
keys

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// passport init 
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport);

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})




// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//Paths - apis 
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter)
app.use('/api/hotels', hotelRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
