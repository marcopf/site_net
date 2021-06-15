const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        io.emit('message', message);
    });
    socket.on('testValue', (testValue) => {
        io.emit('testValue', testValue);
    })
});

http.listen(5050, () => console.log('listening on http://localhost:5050'));


// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });