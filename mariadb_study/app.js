const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userHandler = require('./lib/userhandler');
const fs = require('fs');
const { poolQuery } = require('./lib/mariadb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    const errStatus = false;
    res.render('login', { err: errStatus });
});

app.post('/login', (req, res) => {
    const user = {
        info: req.body,
        error: false,
    };
    console.log(user);

    userHandler.login(user);

    res.render('login', { err: user.error });
});

app.post('/logout', (req, res) => {

});

app.get('/signup', (req, res) => {
    const pwErr = false;
    res.render('signup', { pwErr });
});

app.post('/signup', (req, res) => {
    const user = {
        info: req.body,
        key: new Array(),
        value: new Array(),
        error: false,
    };

    if(user.info.passwd != user.info.repasswd) {
        user.pwErr = true;
        res.render('signup', { pwErr: user.pwErr });
        return;
    }
    delete user.info.repasswd;

    userHandler.signup(user);

    res.redirect('/')
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

// test page for crud
app.get('/test', (req, res) => {
    const testQuery = poolQuery('SELECT * FROM user_basic where id=1');

    testQuery.then((data) => {
        res.render('test', { data });
    }).catch((err) => {
        console.error(err);
    })
});

app.get('*', (req, res) => {
    // 404 error handle
});

let server = app.listen(3030, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('server on. port: ', port)
});