const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Get a dump of all the promotions!');
})
.post((req, res, next) => {
  res.end('Adding this promotion: ' + req.body.name + ' with these details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotiones');
})
.delete((req, res, next) => {
  res.end('Deleting all promotions...');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put((req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promoId + '\n');
  res.end('Will update this promotion: ' + req.body.name +
  ' with these details: ' + req.body.description);
})
.delete((req, res, next) => {
  res.end('Deleting this promotion: ' + req.params.promoId);
});

module.exports = promoRouter;
