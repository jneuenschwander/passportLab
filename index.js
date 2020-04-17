var express = require('express');
var app = express();
var morgan = require('morgan')
var passport = require('passport')
require('./src/strategy.js')


//settings
app.use(express.json({type: 'application/json'}))
app.use(morgan('dev'))

app.get('/login', 
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});