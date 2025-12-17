var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {sequelize} = require('./models');

var indexRouter = require('./routes/rotasIndex');

var app = express();
(async () => {
    try {
        await sequelize.authenticate();
        console.log(`\x1b[42m Conexão com o banco OK \x1b[0m`);

        await sequelize.sync({alter: true});
        console.log(`\x1b[43m Modelos sincronizados \x1b[0m`);

    } catch (err) {
        console.log(`\x1b[41m Erro ao iniciar banco de dados: ${err} \x1b[0m`);
    }
})();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
