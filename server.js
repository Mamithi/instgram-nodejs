var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static('/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('pages/index');
});

app.listen(8080);
console.log('App started! Look at http://localhost:8080');