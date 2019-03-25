const app = require('./../config/config');

const server = app.listen(8080, () => console.log('Server is Running!'));

const io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', (socket) => {
    socket.emit('hasToken', {msg:'aham'});
});