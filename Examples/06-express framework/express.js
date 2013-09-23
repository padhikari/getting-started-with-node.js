var express = require('express');

var app = express();

app.get('/javaScript', function(req,res){
	res.send('<h1>All JavaScript framework');
});

app.get('/javaScript/:title',function(req,res){
	res.send('<h1>'+req.params.title+'</h1>');
});

app.get('/*',function(req,res){
	res.send('if all else fails, we hit this page');
});

app.listen(3000);
