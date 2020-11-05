let express = require('express');
let app = express();

let ssipjot = [
    "aaa",
    "bbb",
    "ccc",
    "ddd",
    "eee",
];

app.set('port', process.env.PORT || 3000);

let handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
console.log(__dirname)

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    let randomString =
        ssipjot[Math.floor(Math.random() * ssipjot.length)];
    res.render('about', { ssipjot: randomString });
});

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
    console.log( 'Express started on http://localhost:' +
        app.get('port') + ';press Ctrl+C to terminate.');
});