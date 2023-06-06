//Express app
import express from 'express';
import compression from 'compression';

import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
//config
const
	__dirname = dirname(fileURLToPath( import.meta.url )) +  sep,
	cfg = {
		port: process.env.PORT || 3000,
		dir: {
			root: __dirname,
			static: __dirname + 'static' + sep,
			views: __dirname + 'views' + sep
		}
	};

console.dir(cfg, {depth: null, color:  true});

//Express init
const app = express();
//do not identify express
app.disable('x-powered-by');
//use EJS templates
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);
//HTTP compression
app.use(compression());

app.use((req, res, next) => {
	console.log(req.url);
	next();
});

//home page route
app.get('/', (req, res) => {
	res.render('message', {title: 'Hello World!'});
});
//another route
import{helloRouter} from './routes/hello.js';
app.use('/hello', helloRouter);
//404 error
app.use((req, res) => {
	res.status(404).render('message', {title: 'Not found'});
});

//serve static assets
app.use(express.static(cfg.dir.static));

//start server
app.listen(cfg.port, () => {
	console.log('Example app listening at http://localhost:' + cfg.port);
});

//export default
export {cfg, app};