var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {  
  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
});
