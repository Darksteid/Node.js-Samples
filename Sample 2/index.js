//Express app
import express from 'express';
//config
const
	cfg = {
		port: process.env.PORT || 3000
	};

//Express init
const app = express();
//do not identify express
app.disable('x-powered-by');
//use EJS templates
app.set('view engine', 'ejs');
app.set('views', 'views');

//render form
app.get('/', (req, res) => {
	res.render('form', {
		title: 'Parse HTTP GET data',
		data: req.query
	});
});
//start server
app.listen(cfg.port, () => {
	console.log('Example app listening at http://localhost:' + cfg.port);
});