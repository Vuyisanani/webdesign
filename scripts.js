/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.

*/
/*
var button = document.querySelector('.targetClassName');

button.addEventListener('click', function(e) {


    */
    
    function myFunction() {
        var x = document.getElementById("flexi-container");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }