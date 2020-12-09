/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 * 
 * https://github.com/axios/axios
 * 
 */
document.getElementsByClassName("w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3")[0].setAttribute("id", "submit");

var para = document.createElement("p");
var node = document.createTextNode("");
para.appendChild(node);
var element = document.getElementById("support-form");
var child = document.getElementById("errrr");
element.insertBefore(para, child);


//<p id="error"></p>



const form = document.getElementById("support-form");
const inputfullname = document.getElementById('input-fullname');
const number = document.getElementById('input-number');
const email = document.getElementById('input-email');
const textboxform = document.getElementById('input-message');
const errorElement = document.getElementById('error');
const checkbox = document.getElementById('input-privacy');

form.addEventListener('submit', function submitForm(event){
    event.preventDefault();
    let messages = []

    if (checkbox.checked === false) {
         messages.push('Checkbox must be checked')
     }

    if (inputfullname.value === "" || inputfullname.value == null) {
        messages.push('Name is required');
        inputfullname.className += " border-red-500";  
    }else{
        inputfullname.className = inputfullname.className.replace(/\bborder-red-500\b/g, "border-blue-500");
    }
    if (number.value === "" || number.value == null) {
        messages.push('Number is required');
        number.className += " border-red-500";
    }
    if (email.value === "" || email.value == null) {
        messages.push('Email field cannot be blank');
        email.className += " border-red-500";
    }
    if (textboxform.value === "" || textboxform.value == null) {
        messages.push('Message is required');
        textboxform.className += " border-red-500";
    }
    if (messages.length > 0) {
        errorElement.innerText = messages[0] //.join(', ')       
    }else{
        document.getElementById('support-form').addEventListener('submit', function submitForm(event){
            event.preventDefault();
            const formData = new FormData(this);
            const request = new XMLHttpRequest();
            console.log(request);
            request.open("POST", "https://hsh.blnq.dev/javascript-basics/form-fetch.php");
            request.onreadystatechange = function (){
                if (request.readyState == XMLHttpRequest.DONE){
                    console.log(request.responseText);
                }
            }
            request.send(formData);
            console.log('status ok')
        });

    }
});