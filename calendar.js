/*
WhosIts and WhatsIts
Author: Katrina Ward
Date: 9/22/2017
*/

/* Global Variables */
var daysOfWeek = ["Monday", "Tuesday", "Wednesday",
			"Thursday", "Friday", "Saturday", "Sunday"];
var firstSet = ["", "60 minute Workout DVD", "", "60 minute Workout DVD", "", 			 "60 minute Workout DVD", "", 
			"", "60 minute Workout DVD", "Bicycle", "60 minute Workout DVD", "Bicycle", "60 minute Workout DVD", "", 
			"", "Bike + Run Combo", "60 minute Workout DVD", "Bike + Run Combo", "60 minute Workout DVD", "Bike + Run Combo", "",
			"", "Bike + Run Combo", "60 minute Workout DVD", "Bike + Run Combo", "60 minute Workout DVD", "Bike + Run Combo", ""];
var inOutDoor = ["", "indoor", "", "indoor", "", "indoor", "",
			"", "indoor", "outdoor", "indoor", "outdoor", "indoor", "",
			"", "outdoor", "indoor", "outdoor", "indoor", "outdoor", "",
			"", "outdoor", "indoor", "outdoor", "indoor", "outdoor", ""];

				  
				  
/* Places daysOfWeek values into header row */
function addColumnHeaders()	{
	var i = 0;
		while (i < 7)	{
			document.getElementsByTagName("th")[i].innerHTML
			= daysOfWeek[i];
			i++;
		}
}


/* Adds day number in the first p element */
function addDayNumbers()	{
	var i = 1;
	var paragraphs = "";
	do	{
		var tableCell = document.getElementById("1-" + i);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[0].innerHTML = i;
		i++;
	}
	while (i <= 28);
}


/* Adds workout of the day to the second p element*/
function addPlanInfo()	{
	var paragraphs = "";
	for (var i = 0; i < 28; i++)	{
		var day = i + 1;
		var tableCell = document.getElementById("1-" + day);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[1].innerHTML += firstSet[i];
	}
}


/* Adds time/distance to the third p element*/
function addTimeDistance()	{
	var paragraphs = "";
	for (var i = 0; i < 28; i++)	{
		var day = i + 1;
		var tableCell = document.getElementById("1-" + day);
		paragraphs = tableCell.getElementsByTagName("p");
		
		switch (inOutDoor[i])	{
			case "indoor":
				paragraphs[2].innerHTML = "(Home)";
				break;
			case "outdoor":
				paragraphs[2].innerHTML = "(Park)";
				break;
		}
	}
}


/* Polulates Calendar */
function setUpPage()	{
	addColumnHeaders();
	addDayNumbers();
	addPlanInfo();
	addTimeDistance();
}


/* Runs setUpPage when page loads */
if (window.addEventListener)	{
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)	{
	window.attachEvent("onload", setUpPage);
}