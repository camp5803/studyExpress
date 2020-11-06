/* express modules */
const express = require('express');
const app = express();

/* http modules */
const http = require('http');
const server = http.createServer(app);

/* socket.io modules */
const socket = require('socket.io');
const io = socket(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
    });
});

io.sockets.on('connection', (socket) => {
    socket.on('newUser', (name) => {
        console.log(name + ' is connected');
        socket.name = name;
        
        io.sockets.emit('update', { type: 'connect', name: 'SERVER', message: name + ' is connected'});
    });

    socket.on('message', (data) => {
        data.name = socket.name;
        console.log(data);

        socket.broadcast.emit('update', data);
    });

    socket.on('disconnect', () => {
        console.log(name + ' is disconnected');

        socket.broadcast.emit('update', { type: 'disconnect', name: 'SERVER', message: name + ' is disconnected'});
    })
})

app.use(function(req, res) {
    res.status(404);
    res.render('404');
})

app.use(function(err, req, res, next) {
    console.error(err, stack);
    res.status(500);
    res.render('500');
})

app.listen(app.get('port'), function() {
    console.log( 'Express chatting service is started on http://localhost:' +
        app.get('port') + ';press Ctrl+C to terminate.');
});