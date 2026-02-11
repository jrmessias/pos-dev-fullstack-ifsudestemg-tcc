var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser')
const {sequelize} = require('./models');
const {engine} = require('express-handlebars');
const session = require('express-session')
const flash = require('connect-flash')
const routesWeb = require('./routes/web.routes')
const routesApi = require('./routes/api.routes')
const cors = require('cors')

var app = express();
(async () => {
    try {
        await sequelize.authenticate();
        console.log(`\x1b[42mConexão com o banco OK \x1b[0m`);

        // await sequelize.sync({alter: true});
        // console.log(`\x1b[43mModelos sincronizados \x1b[0m`);

    } catch (err) {
        console.log(`\x1b[41mErro ao iniciar banco de dados: ${err} \x1b[0m`);
    }
})();

// app.engine('hbs', engine({
//     extname: '.hbs',
//     defaultLayout: 'admin',
//     viewsDir: path.join(__dirname, 'views'),
//     layoutsDir: path.join(__dirname, 'views/layouts'),
//     partialsDir: path.join(__dirname, 'views/partials'),
//     helpers: require('./helpers/handlebars')
// }));
// app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://127.0.0.1:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Rotas
// app.use('/', routesWeb);
app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.locals.error = "uadaréu";
    next(createError(404));
});

// Add this at the very end of your middleware stack
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack to the console
    res.status(err.status || 500);

    // Send the error message and stack trace in development
    if (process.env.NODE_ENV === 'development') {
        res.send({
            message: err.message,
            error: err
        });
    } else {
        // Generic error message in production
        res.send({
            message: 'Internal Server Error',
            error: {}
        });
    }
});

//
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;
