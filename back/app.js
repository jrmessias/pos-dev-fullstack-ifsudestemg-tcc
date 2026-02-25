var path = require('path');
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser')
const {sequelize} = require('./models');
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
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ['http://127.0.0.1:5173','http://127.0.0.1:5174','http://127.0.0.1:5175'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/api', routesApi);

app.use(function (req, res, next) {
    res.locals.error = "uadaréu";
    next(createError(404));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);

    if (process.env.NODE_ENV === 'development') {
        res.send({
            message: err.message,
            error: err
        });
    } else {
        res.send({
            message: 'Internal Server Error',
            error: {}
        });
    }
});

module.exports = app;
