var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter',function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/profile',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/article-three',function(req,res){
    res.send('Article three will be requested and served here.');
});

app.get('/aboutMe', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutMe.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/offPic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'offPic.jpg'));
});


var names = [];

app.get('/submit-name/:name',function(req,res) {
   
//Get the name from the request:
   
  var name = req.params.name;
   
//push the name to a list:
   
  names.push(name);
  
 //Using JSON to send JS object as string back to the client
   
  res.send(JSON.stringify(names));
  
 
  
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
