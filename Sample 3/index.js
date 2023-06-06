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

//body parsing
app.use(express.urlencoded({extended: true}));
//render form
//use .all to handle both GET and POST
app.all('/', (req, res, next) => {
	if(req.method === 'GET' || req.method === 'POST') {
		res.render('form', {
			title: 'Parse HTTP POST data',
			data: req.body
		});
	}
	else{
		next();
	}
});

//start server
app.listen(cfg.port, () => {
	console.log('Example app listening at http://localhost:' + cfg.port);
});