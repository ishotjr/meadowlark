var express = require('express');

var app = express();

var fortunes = [
	"Fortune #1",
	"Fortune #2",
	"Fortune #3"	
];

//set up handlebars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

// static middleware
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
	res.render('home');
});

app.get('/about', function(req, res) {
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', { fortune: randomFortune });
});

// 404 page
app.use(function(req, res) {
	res.status(404);
	res.render('404');
});
  
// 500 page
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Express started on localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

