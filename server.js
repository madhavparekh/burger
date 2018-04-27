var express = require('express');
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser');
var path = require('path');

var router = require('./controllers/burgers_controller');
//var apiRoutes = require('./app/routing/apiRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

//app.use('/api', apiRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});


