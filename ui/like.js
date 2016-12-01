//code for counting like in the home page

// code for first like button:
var button1 = document.getElementById('bttnOne');

button1.onclick = function() {

  // create a request object named "request"
  
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  
  request.onreadystatechange = function(){
        // process the server response
          
        if (request.readyState === XMLHttpRequest.DONE) {
               // everything is good, the response is received
               
               if (request.status === 200) {
                    // Perfect! Now we want to capture the value from the respone
                    var counter = request.responseText;
                    var span = document.getElementById('count1');
                    span.innerHTML = counter.toString();

                                
                } 
             
             
        } 
  
  };           
 
 // Making the request:
  
  request.open('GET','http://dibya92.imad.hasura-app.io/counter1',true);
  request.send(null);
      
 
};


// code for second like button:
var button2 = document.getElementById('bttnTwo');

button2.onclick = function() {

  // create a request object named "request"
  
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  
  request.onreadystatechange = function(){
        // process the server response
          
        if (request.readyState === XMLHttpRequest.DONE) {
               // everything is good, the response is received
               
               if (request.status === 200) {
                    // Perfect! Now we want to capture the value from the respone
                    var counter = request.responseText;
                    var span = document.getElementById('count2');
                    span.innerHTML = counter.toString();

                                
                } 
             
             
        } 
  
  };           
 
 // Making the request:
  
  request.open('GET','http://dibya92.imad.hasura-app.io/counter2',true);
  request.send(null);
      
 };
// Code for second like button:
var button2 = document.getElementById('bttnTwo');

button2.onclick = function() {

  // create a request object named "request"
  
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  
  request.onreadystatechange = function(){
        // process the server response
          
        if (request.readyState === XMLHttpRequest.DONE) {
               // everything is good, the response is received
               
               if (request.status === 200) {
                    // Perfect! Now we want to capture the value from the respone
                    var counter = request.responseText;
                    var span = document.getElementById('count2');
                    span.innerHTML = counter.toString();

                                
                } 
             
             
        } 
  
  };           
 
 // Making the request:
  
  request.open('GET','http://dibya92.imad.hasura-app.io/counter2',true);
  request.send(null);
      
 };

// Code for third like button:
var button3 = document.getElementById('bttnThree');

button3.onclick = function() {

  // create a request object named "request"
  
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  
  request.onreadystatechange = function(){
        // process the server response
          
        if (request.readyState === XMLHttpRequest.DONE) {
               // everything is good, the response is received
               
               if (request.status === 200) {
                    // Perfect! Now we want to capture the value from the respone and put into the correct span location within the doc.
                    var counter = request.responseText;
                    var span = document.getElementById('count3');
                    span.innerHTML = counter.toString();

                                
                } 
             
             
        } 
  
  };           
 
 // Making the request:
  
  request.open('GET','http://dibya92.imad.hasura-app.io/counter3',true);
  request.send(null);
      
 
};
