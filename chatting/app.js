const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

let handlebars = require('express-handlebars')
    .create({ defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/'));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log( 'Express started on http://localhost:' +
        app.get('port') + ';press Ctrl+C to terminate.');
});