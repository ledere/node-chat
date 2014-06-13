var socketio = require('socket.io');

// Listen on port 12121
var port = 12121;
var io = socketio.listen(port);

io.sockets.on('connection', function (socket) {
  console.log('client connected');

  // Broadcast a user's message to everyone else in the room
  socket.on('send', function (data) {
    console.log("message sent: ", data);
    io.sockets.emit('message', data);
  });

});

console.log("node-chat server started on port " + port);