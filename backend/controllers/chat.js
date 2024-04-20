const express = require('express');
const app = express();

const io = require('socket.io')(require('http').createServer(app), { cors: { origin: '*' } });

function configureSocket(server) {

  io.on('connection', (socket) => {
    socket.emit('activeUsers');
    socket.emit('getId', socket.id);

    socket.on('chat', (id, chat) => {
      io.emit('sendChat', id, chat, socket.id);
    });

    socket.on('usernameChange', (username, socketid) => {
      socket.broadcast.emit('resetChat', username, socketid);
    });

    socket.on('userTyping', (socketid, type) => {
      socket.broadcast.emit('someoneTyping', socketid, type);
    });

    socket.on('activeUsers', () => {
      const onlineUsers = io.engine.clientsCount;
      io.emit('countUsers', onlineUsers);
    });

    socket.on('disconnect', () => {
      socket.broadcast.emit('disconnectNotification', socket.id);
      const onlineUsers = io.engine.clientsCount;
      io.emit('countUsers', onlineUsers);
    });
  });

  return io;
}

module.exports = configureSocket;


