var io = require('socket.io'),
connect = require('connect');

var app = connect().use(connect.static('public')).listen(3001);
var chatPlace = io.listen(app);
chatPlace.sockets.on('connection', function(socket){
	socket.emit('entrance',{message:"Welcome to Chat room"});

	socket.on('disconnect',function(){
		chatPlace.sockets.emit('exit',{message:'A chatter has disconnected'});
	});

	chatPlace.sockets.emit('entrance',{message:'A new chatter is online'})
});