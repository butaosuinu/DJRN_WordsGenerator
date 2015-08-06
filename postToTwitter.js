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

var oa = new OAuth(
	"https://api.twitter.com/oauth/request_token",
	"https://api.twitter.com/oauth/access_token",
	"Consumer key",
	"Consumer secret",
	"1.0",
	"http://127.0.0.1:7000/auth/twiiter/callback",
	"HMAC-SHA1"
);

app.get('/auth/twitter', function(req, res) {
	// body...
})