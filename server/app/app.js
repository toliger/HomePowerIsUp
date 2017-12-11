let express 			= require('express');
let bodyParser 		= require('body-parser');
let expressLess   = require('express-less');
let minifyHTML    = require('express-minify-html');
let favicon       = require('serve-favicon');
let db						= require('./bdd/bdd.js')
let app 					= express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//db.generate();

app.set('views', __dirname + '/views');

//Activation de EJS
app.set('view engine', 'ejs');

//Activation de less
app.use('/less-css', expressLess(__dirname + '/less', { compress: true, cache: true }));

//Compression HTML
app.use(minifyHTML({
  override:      true,
  exception_url: false,
  htmlMinifier: {
    removeComments:            true,
    collapseWhitespace:        true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes:     true,
    removeEmptyAttributes:     true,
    minifyJS:                  true
  }
}));

app.use(bodyParser.json());

app.use('/js', express.static('js'));

app.use('/pictures', express.static('pictures'));

//favicon
app.use(favicon(__dirname + '/pictures/favicon.png'));

// routes
require('./app/routes.js')(app, db);

// RESTful
require('./app/RESTful.js')(app, db);

// Traitement Erreur 404
require('./app/404.js')(app);

//Socket IO
require('./app/socketIO.js')(io, db);

//Ecoute le port 8080
server.listen(8080);
