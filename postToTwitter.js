var express = require('express'),
	hogen = require('hogan-express'),
	twitter = require('twitter'),
	OAuth = require('node-oauth'),
	http = require('http'),
	path = require('path');

var app = express();

app.set('port', process.env.PORT || 7000);
app.set('views', path.join(__dirname,"/"));
app.set("view engine", "html");
app.engine("html", hogen);

app.get("/", function(req, res){
	// body...
	res.render("index",{});
});

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});


// var oa = new OAuth(
// 	"https://api.twitter.com/oauth/request_token",
// 	"https://api.twitter.com/oauth/access_token",
// 	"Consumer key",
// 	"Consumer secret",
// 	"1.0",
// 	"http://127.0.0.1:7000/auth/twiiter/callback",
// 	"HMAC-SHA1"
// );

// app.get('/auth/twitter', function(req, res) {
// 	// body...
// });