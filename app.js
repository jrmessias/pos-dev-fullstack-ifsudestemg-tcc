var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser')
const {sequelize} = require('./models');
const { engine } = require('express-handlebars');
const session = require('express-session')
const flash = require('connect-flash')

// Rotas
var indexRouter = require('./routes/routesIndex');
var userRouter = require('./routes/routesUser');

var app = express();
(async () => {
    try {
        await sequelize.authenticate();
        console.log(`\x1b[42mConexão com o banco OK \x1b[0m`);

        // await sequelize.sync({alter: true});
        console.log(`\x1b[43mModelos sincronizados \x1b[0m`);

    } catch (err) {
        console.log(`\x1b[41mErro ao iniciar banco de dados: ${err} \x1b[0m`);
    }
})();

// view engine setup
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'admin',
    viewsDir: path.join(__dirname, 'views'),
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: process.env.SESSION_SECRET || 'rankio-secret',
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    res.locals.info = req.flash('info')
    res.locals.warning = req.flash('warning')
    res.locals.form = req.flash('form')[0] ?? null
    next()
})

app.use('/', indexRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.locals.error = "uadaréu";
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
