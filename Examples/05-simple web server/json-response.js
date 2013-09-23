var connect = require('connect');

var myData = {
	'firstName':'Steve',
	'lastName':'Jobs',
	'company': 'Apple Inc'
};

var app = connect()
	.use(function(req,res){
		res.setHeader('Content-Type','application/json');
		res.end(JSON.stringify(myData));
	})
	.listen(3000)
