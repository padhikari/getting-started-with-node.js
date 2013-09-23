var connect =require('connect');

var app = connect()
	.use(connect.static('public'))
	.use(function(req,res){
		res.end("couldn't find it.");
	})
	.listen(3000);
