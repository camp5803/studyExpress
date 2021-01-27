const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const dbConn = require('./lib/mariadb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {

});

app.post('/logout', (req, res) => {

});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/post', (req, res) => {
});

app.get('/post/private', (req, res) => {

});

app.get('/post/public', (req, res) => {

});

app.get('/post/timetable', (req, res) => {

});

app.get('/armycalc', (req, res) => {

});

app.get('*', (req, res) => {
    // 404 error handle
});

let server = app.listen(3030, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('server on. port: ', port)
});