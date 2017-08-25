var express = require('express');
//var port = process.env.PORT || 3000;
var course = require('./api/models/courseModel');
var bodyParser = require('body-parser');
var app = express();
//var subpath = express();


app.use(bodyParser());
//app.use('/v1', subpath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var courses = require('./api/routes/courseListRoutes');
app.use('/courses', courses)



var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});

module.exports = server;
