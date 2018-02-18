const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = '3000';

const app = express();
app.use(morgan('dev'));

//Setting us the routers
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

//setting up the application
app.use(bodyParser.json());
app.use (express.static(__dirname+ '/public'));
const server = http.createServer(app);

//listen a port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
