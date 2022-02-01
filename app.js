var express = require('express');
var cors = require('cors');
var logger = require('morgan');

var indexRoute = require('./routes/index');

var app = express();

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
});

module.exports = app;