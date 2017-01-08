var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));




//Counter end points for tracking the like buttons on index-page

var counter1 = 0;
app.get('/counter1',function(req,res){
   counter1 = counter1 + 1;
   res.send(counter1.toString());
});

var counter2 = 0;
app.get('/counter2',function(req,res){
   counter2 = counter2 + 1;
   res.send(counter2.toString());
});

var counter3 = 0;
app.get('/counter3',function(req,res){
   counter3 = counter3 + 1;
   res.send(counter3.toString());
});

//Comment list end point
var comments = [];

app.get('/commentList',function(req,res) {
   
//Get the name from the request:
   
  var comment = req.query.comment;//comments send as query parameter are captured into variable 'comment'
   
//push the name to a list:
   
  comments.push(comment);
  
 //Using JSON to send JS object as string back to the client
   
  res.send(JSON.stringify(comments));
  
 
  
});
//Serving the home-page:
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  });

//Serving other resouces:

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

//Serving the js files

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/like.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'like.js'));
});
app.get('/ui/comment.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comment.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/offPic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'offPic.jpg'));
});

//serving the name list in profile page

var names = [];

app.get('/submit-name',function(req,res) {
   
//Get the name from the request:
   
  var name = req.query.name;//name send as query parameter
   
//push the name to a list:
   
  names.push(name);
  
 //Using JSON to send JS object as string back to the client
   
  res.send(JSON.stringify(names));
  
 
  
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
