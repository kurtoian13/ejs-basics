const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  const name = 'Kurt';
  res.render('index', {name})
})

app.listen(3000, function() {
  console.log('server up on 3k');
})