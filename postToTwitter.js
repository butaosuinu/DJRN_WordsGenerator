var express = require('express'),
	hogen = require('hogen-express'),
	twitter = require('twitter'),
	oauth = require('oauth').OAuth,
	http = require('http'),
	path = require('path'),
	gene = require('./gene.js');

var = app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 7000);
	app.set('views', path.join(__dirname,"views"));
	app.set("view engine", "html");
	app.engine("html", hogen);
	app.use(express.favicon());
});

app.get('/', index);