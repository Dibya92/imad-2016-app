console.log('Loaded!');
//code to locally update the counter

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {

//Render the variable in the span loaction

   counter = counter + 1;

   //Select the correct span area(i.e by id) from the html document
   
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();

}