const express = require('express'),	expressLayouts = require('express-ejs-layouts');
port = process.env.PORT || 8080;
app = express();

route = require('./app/routes');

app.use(route);
app.listen(port, ()=>{
	console.log('Listening on port'+port);
});

// staticCss = express.static(__dirname+'public');
app.use(express.static(__dirname+'public'));	app.set('view engine', 'ejs');

app.use(expressLayouts);











// const express = require('express'),
// app = express();
// port = process.env.PORT || 8080;

// routes = require('./app/routes');

// app.use(routes);










// app.listen(port, ()=>{
// 	console.log(`Listening on port ${port}`);
// });