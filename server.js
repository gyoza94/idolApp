const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket =>{
    console.log('so good!');

    socket.on('joinRoom', ()=>{
        console.log("ok");
    });

    socket.emit('comment', 'Welcome to myIdolApp');

    socket.broadcast.emit('comment', 'User has joined the chat');

    socket.on('disconnect', ()=> {
        io.emit('comment', 'User has left this chat');
    })
});

const PORT = 8800;

server.listen(PORT, () =>{
    console.log(`listen for ${PORT}`);
});