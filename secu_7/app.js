const express = require('express');
const bodyParser = require('body-parser');
let sess = require('express-session');
const app = express();
const ejs = require('ejs');
const KEY = 'TESTKEY';
const mongoose = require('mongoose');
let db = mongoose.connection;
let Schema = mongoose.Schema;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.use(sess({
    secret: KEY,
    resave: false,
    saveUninitialized: true
}));

let signupSchema = new Schema({
    email: String,
    password: Number,
    cpassword: Number,
    birth: {
        yyyy: Number,
        mm: Number,
        dd: Number
    },
    gender: String,
    contact: {
        num1: Number,
        num2: Number
    }
});

let signup = mongoose.model('signup', signupSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

db.on('error', (err) => {
    console.error("connection err", err);
});
db.once('open', () => {
    console.log('connected to mongodb server');
});

mongoose.connect('mongodb://localhost/test');

// http://localhost:8080/signin

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    let Signup = new signup();
    
    console.log(req.body);
    Signup.email = req.body.emailid;
    Signup.passwd = req.body.password;
    Signup.cpasswd = req.body.cpassword;
    Signup.birth = {
        year: req.body.yyyy,
        month: req.body.mm,
        dd: req.body.dd
    },
    Signup.gender = req.body.gender;
    Signup.contact = {
        num1: req.body.contactnum,
        num2: req.body.contactnum2
    }

    Signup.save((err) => {
        if(err) {
            console.error(err);
            return;
        }
        return;
    });
    
    res.redirect('/');
});

app.post('/signin', (req, res) => {
    let email, passwd;

    signup.findOne({email: req.body.email, passwd: req.body.passwd}, () => {
        if(err) return res.status(500).json({error: err});
        if(!email) return res.status(404).json({error: 'email not found'});
        res.json(email);
    });
    if(email) {
        req.session.valid = true;
    };
})

let server = app.listen(3030, () => {
	let host = server.address().address;
	let port = server.address().port;
	console.log('서버 온', port);
});