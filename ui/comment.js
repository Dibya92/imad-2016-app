//Select and capure the name from the document

var comment = document.getElementById("comment").value;
var submit = document.getElementById("commentButton");

submit.onclick = function() {
    
    //To make a request to the server & send the comment
   
   
   
    //Render the list from the server
       //Templating Job
       var comments = ["comment1","comment2","comment3"];
       var list = "";  //Empty String
       for (var i=0; i<=comments.length; i++) {
           list += "<li>" + comments[i] + "</li>" + "<br />";
         }
       var commentList = document.getElementById("commentList");
       commentList.innerHTML = list;
    
};