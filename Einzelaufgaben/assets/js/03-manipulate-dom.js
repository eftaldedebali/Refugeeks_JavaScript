// log text content from #headline
document.getElementById("headline").innerText;

// change the text from the headline to:
// „Cool, sie ist offen! :)“
document.getElementById("headline").innerText = "Cool, sie ist offen! :)";

// set value of the input element #input to:
// „Hier steht Text“
document.getElementById("input").value = "Hier steht Text";

// set the value of the input element #input
// as the innerHtml of the div #output
document.getElementById("output").innerHTML = document.getElementById("input").value;

// add the class bg-black to the body
// if there it doesn't got it already
document.getElementsByTagName("body")[0].setAttribute("class", "bg-black");

// toggle the class border-red on the input
document.getElementById("input").style.borderColor = "red";

// multiply the data-number attribute by 3
// and update the value in the dom
document.getElementById("output").dataset.number *=3;