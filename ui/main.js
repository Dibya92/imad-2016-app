console.log('Loaded!');
//Counter code

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
  //Make the request:
  
  request.open('GET','http://dibya92.imad.hasura-app.io/counter',true);
  request.send(null);
      
 
};
   
   
   
