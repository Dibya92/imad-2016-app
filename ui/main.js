console.log('Loaded!');

// 1.Counter code

var button = document.getElementById('counter');


button.onclick = function() {

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
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();

                                
                } 
             
             
        } 
  
  };           
 
 // Make the request:
  
  request.open('GET','http://dibya92.imad.hasura-app.io/counter',true);
  request.send(null);
      
 
};
   
// 2.Name Submit code


var submit = document.getElementById('subBtn');

submit.onclick = function(){
  
   //+ create a request object named "request"
  
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  
  request.onreadystatechange = function(){
        // process the server response
          
        if (request.readyState === XMLHttpRequest.DONE) {
               // everything is good, the response is received
               
               if (request.status === 200) {
                    
                        //Capture a list of names and render it as list
                          var names = request.responseText;//The response obtain from the server will be a JS String, need to convert back                                to array
                          names = JSON.parse(names);
                          var list = '';
 
                          for (var i = 0;i < names.length;i++){
     
                                     list += '<li>' + names[i] + '</li>';
                          }

                          var ul = document.getElementById('nameList');
                          ul.innerHTML = list;

                                
                } 
             
             
        } 
  
   };           

 var nameInput = document.getElementById('name');
 var name = nameInput.value;//Vale entered into the input box in the html document

 
 
  //Make the request to server:
  
  request.open('GET','http://dibya92.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
       
 //+Make a request to the server and send the name



    
};

   
