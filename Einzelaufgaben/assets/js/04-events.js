// log the value of the input on every input

document.getElementById("input").addEventListener("input", myFunction);
   function myFunction(){
      console.log(document.getElementById("input").value);
   }

// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“

document.querySelector("#submit").addEventListener("click", function(event) {
     event.preventDefault();
     this.innerHTML = "Der Button wurde geklickt!";
 });

if(document.getElementById("submit").clicked == true)
{
   alert("Der Button wurde geklickt!");
}
// log the message „500px erreicht“, when the user scrolls more than 500px

window.addEventListener("scroll", myFunction);

function myFunction() {
   //console.log(scrollY);
   if (scrollY >= 500){
  console.log("500px erreicht");
}}