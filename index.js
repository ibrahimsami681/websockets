//this is only locally avaliable, host the index live page
//visit this page to see more https://socket.io/get-started/chat
const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`)
    });
});

http.listen(8080, () => console.log("listening..."));