const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = '3000';

const app = express();
app.use(morgan('dev'));
app.use (bodyParser.json());

app.all('/dishes', (request,response,next) => {
  require.statusCode = 200;
  require.setHeader = ('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', (request,response,next) => {
  response.end('Take this shite back mate!');
});
app.post('/dishes', (request,response,next) => {
  response.end('lets add this dish: '+ request.body.name +
    'with details: '+ request.body.description);
});
app.put('/dishes', (request,response,next) => {
  response.end('lets add this dish: '+ request.body.name +
    'with details: '+ request.body.description);
});

app.use (express.static(__dirname+ '/public'));
app.use((request,response,next) => {

  require.statusCode = 200;
  require.setHeader = ('Content-Type', 'text/html');
  response.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
