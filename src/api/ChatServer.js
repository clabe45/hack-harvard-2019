const express = require('express');
const app = express();
const server = require('http').server(app)
const io = require('socket.io')(server);

app.set('views', './client/pages/messages/views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const rooms = {};
const users = {};

app.get('/', (reg, res) => {
    res.render('index', {rooms: rooms});
});

app.get('/:room', (req, res) =>{
    res.render('room', {roomName: req.params.room})
});

server.listen(3000)

//give each user thier own socket
io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name;
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]});
    })
    socket.on('disconnect', () => {
        users[socket.id] = name;
        delete users[socket.id];
    })
})
