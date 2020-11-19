/**
 * SAVE LIKED PRODUCTS
 * Select all of the like buttons, listen to the click element on every "like-btn" and the save the key of the "like-btn" to the localStorage.
 * Add the class "liked" if the button was clicked.
 * Check on reload if data is stored and add the liked class again
 * 
 * https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 * 
 */

var x;
for ( x = 0; x < 8; x++){
  document.parentElement  
document.getElementsByClassName("like-btn")[x].addEventListener("click",fx)
        }
 function fx(){
    
    this.classList.toggle('liked');
    
}