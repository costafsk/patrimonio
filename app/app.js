const app = require('./../config/server');

const server = app.listen(3000, () => console.log('Server is Running!'));

const io = require('socket.io').listen(server);

// Setting io as global variable;
app.set('io', io);