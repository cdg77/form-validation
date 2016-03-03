'use strict';

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var validate = require('../shared/validate');
var resources = require('../shared/resources');
var constants = require('../shared/constants');

console.log(__dirname);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client')));
app.get(/\.ico/, function(req,res) {
    res.send();
});

app.get('/:example', function (req, res, next) {
  var example = req.params.example;
  try {
    res.render(`../client/${example}/index.jade`, { resources : resources, constants : constants });
  } catch (e) {
    console.log('error', e);
    next();
  }
});

app.get('*', function (req, res) {
  res.render('../client/index.jade');
});

app.post('/api/update', function(req, res) {
  var valid = validate(req.body);
  console.log('request body', req.body);

  if (valid.valid) {
    res.status(200).send({ message: 'OK' });
  } else {
    res.status(422).send({ message: valid });
  }
});

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
