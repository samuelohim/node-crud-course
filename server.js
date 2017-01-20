const express = require('express'),
app = express();
port = process.env.PORT || 8080;



app.use(require('./app/routes'));










app.listen(port, ()=>{
	console.log(`Listening on port ${port}`);
});