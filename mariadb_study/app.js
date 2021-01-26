const express = require('express');
const app = express();
let sess = require('express-session');
const bodyParser = require('body-parser');

app.use(sess({
    secret: require('./lib/secret').KEY,
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

let server = app.listen(3030, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('server on. port: ', port)
});