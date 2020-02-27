const express = require('express');
const bodyParser = require('body-parser');

//INITIALIZE APP WITH EXPRESS
const app = express();

//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set proper Headers on Backend
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/auth', require('./routes/auth')); //Authentication with JWT
app.use('/public', require('./routes/public')); //Public
app.use('/secret', require('./routes/secret')); //Secret

app.listen(3000);