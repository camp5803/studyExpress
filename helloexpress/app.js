let ssipjot = require('./lib/ssipjot.js');
let express = require('express');
let app = express();

app.set('port', process.env.PORT || 3000);

let handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about', { ssipjot: ssipjot.randomString() }, );
});

app.get('/chat', (req, res) => {
    res.send('Functionality is not yet implemented\n'
    + 'Please contact the administrator.');
})

app.use((req, res) => {
    res.status(404);
    res.render('404');
})

app.use((err, req, res, next) => {
    console.error(err, stack);
    res.status(500);
    res.render('500');
})

app.listen(app.get('port'), () => {
    console.log( 'Express started on http://localhost:' +
        app.get('port') + ';press Ctrl+C to terminate.');
});