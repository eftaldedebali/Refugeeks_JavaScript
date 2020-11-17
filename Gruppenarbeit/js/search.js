/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */

document.getElementsByClassName("px-6 w-full relative text-gray-600")[0].setAttribute("id", "searchbar");
document.getElementsByClassName("search-btn pl-3 inline-block no-underline hover:text-black")[0].href = "#search";
document.getElementsByClassName("search-btn pl-3 inline-block no-underline hover:text-black")[0].setAttribute("onclick", "searchHide()");

function searchHide(){
    document.getElementById("searchbar").classList.toggle("hidden");
}

document.getElementsByClassName("w-full bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none")[0].setAttribute("id", "searchinput");

function clearInput(){
    document.getElementById("searchinput").value = "";
}

document.getElementsByClassName("absolute right-0 top-0 mt-1 mr-8")[0].setAttribute("onclick", "clearInput()");

