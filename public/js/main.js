const socket = io('http://localhost:8080');

socket.on('hasToken', (data) => {
    console.log('TEM TOKEN???');
});