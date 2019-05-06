const socket = io('http://localhost:3000');

socket.on('user', (data) => {
    window.location.reload();
    if (localStorage.username === 'undefined') {
        localStorage.setItem('username', data.username);
    }
});

$(() => {
    let username = localStorage.getItem('username');
    username = username.split('');
    username[0] = username[0].toUpperCase();
    $('.name').text(username.join(''));
});
