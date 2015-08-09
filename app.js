var express = require('express'),
	hogen = require('hogan-express'),
	http = require('http'),
	fs = require('fs'),
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

app.use('/', express.static('public'));

app.get(/^\/(?:css|js|html)\/.+/, function(req, res) {
	var conctentType = undefined,
	filePath = __dirname + req.url;

	switch(path.extname(req.url)){
	case '.css':
		conctentType = 'text/css';
		break;
	case '.js':
		conctentType = 'text/js';
		break;
	default:
		conctentType = 'text/html';
	}

	path.exists(filePath, function(exists) {
		console.log(exists);
		if (exists) {
			fs.readFile(filePath, function(error, conctent) {
				if (error) {
					res.writeHead(500);
					res.end();
				}else{
					res.writeHead(200, {'Content-Type': conctentType});
					res.end(conctent, 'utf-8');
				}
			});
		}else{
			res.writeHead(404);
			res.end();
		}
	});
});
