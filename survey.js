/*
WhosIts and WhatsIts
Author: Katrina Ward
Date: 11/03/2017
*/

/* Global Variables */
var prefer = [];
var arrayString;



/* Add/remove hobbies to readout & prefer array */
function surveyReadout(event)	{
	if (event === undefined)	{ // Get caller element in IE8
		event = window.event;
	}
	
	var callerElement = event.target || event.srcElement;
	var prefHobby = callerElement.value;
	
	if (callerElement.checked)	{ // When box checked
		prefer.push(prefHobby); //Adds hobby to prefer array
		
		var newPrefer = document.createElement("li");
		newPrefer.innerHTML = prefHobby;
		document.getElementById("survList").appendChild(newPrefer); // Adds checked value 

	} else	{ // When box unchecked
		var listItems = document.querySelectorAll("#survList li");
		
		for (var i = 0; i < listItems.length; i++)	{
			if (listItems[i].innerHTML === prefHobby)	{
				prefer.splice(i, 1); // Cuts hobby from prefer array
				
				listItems[i].parentNode.removeChild(listItems[i]);
				// Removes hobby from prefer array
				break;
			}
		}
	}
}



/* Convert prefer array to string */
function convertToString()	{
	arrayString = prefer.toString();
	
}



/* Event Listeners */
function createEventListeners()	{
	var passTime = document.getElementsByName("passTime");
		if (passTime[0].addEventListener)	{
			for (var i = 0; i < passTime.length; i++) {
			 passTime[i].addEventListener("change", surveyReadout, false);
		  }
	   } else if (passTime[0].attachEvent) {
		  for (var i = 0; i < passTime.length; i++) {
			 passTime[i].attachEvent("onchange", surveyReadout);
		  }
	   }
	   
	var button = document.getElementById("submit");
	if (button.addEventListener)	{
		button.addEventListener("click", convertToString, false);
	} else if (button.attachEvent)	{
		button.attachEvent("onclick", convertToString);
	}
}



/* Runs listeners on page load */
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}