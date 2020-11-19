/**
 * CSS-ANIMATIONS
 * Toggle the class "hidden" from the element with the id "menu", when the user clicks on the element with the id "menu-btn"
 * 
 */
document.getElementsByClassName("cursor-pointer md:hidden block")[0].setAttribute("onclick", "menuUnhidden()");

function menuUnhidden(){
    document.getElementById("menu").classList.toggle("hidden");
}

//menuson