//Select and capure the name from the document



var submit = document.getElementById("commentButton");

submit.onclick = function() {
    
    //Step1: To make a request to the server & send the comment
      //Creating a XMLHttpRequest object
      httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function () {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
               //Take some action
               if (httpRequest.status === 200) {
                          //Step-2: Render the comment list from the server-response
                             //Templating Job
                                // var comments = ["comment1","comment2","comment3"];
                               var comments = httpRequest.responseText;
                               comments = JSON.parse(comments);
                                var list = "";  //Empty String
                                for (var i=0; i<comments.length; i++) {
                                           list += "<li>" + comments[i] + "</li>" + "<br />";
                                }
                                
                                var commentList = document.getElementById("commentList");
                                commentList.innerHTML = list;
                      
                }
           }
  
      };
     //Get the current value in the comment box
      var comment = document.getElementById("comment").value;
     //Make the request
      httpRequest.open('GET', 'http://dibya92.imad.hasura-app.io/commentList?comment='+comment);
      httpRequest.send(null);
};