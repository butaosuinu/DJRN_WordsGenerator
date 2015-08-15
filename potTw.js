var twitter = require('twitter'),
	OAuth = require('node-oauth'),
	path = require('path');

var SECRET = {
	CONSUMER_KEY: 'your consumer key',
	CONSUMER_SECRET: 'your consumer secret',
}

var twit = new twitter({

});

var oa = new OAuth(
	"https://api.twitter.com/oauth/request_token",
	"https://api.twitter.com/oauth/access_token",
	SECRET.CONSUMER_KEY,
	SECRET.CONSUMER_SECRET,
	"1.0",
	"http://127.0.0.1:3000/auth/twitter/callback",
	"HMAC-SHA1"
);

