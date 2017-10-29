/*
WhosIts and WhatsIts
Author: Katrina Ward
Date: 10/28/2017
*/

/*
I used to books tutorial to make this calendar as I wasn't sure what other type of date counter to make. I did modify it slightly to allow past and future dates.
*/


"use strict"; // interpret contents in Javascript strict mode



/* Global Variables */
var dateObject = new Date();
var countdown;



/* Populates the calendar table */
function displayCalendar(whichMonth)	{
	var date;
	var dateToday = new Date;
	var dayOfWeek;
	var daysInMonth;
	var dateCells;
	var captionValue;
	var month;
	var year;
	var monthArray = ["January", "February", "March", "April", "May",
			"June", "July", "August", "September", "October", "November",
			"December"];
			
	if (whichMonth === -1)	{ // Navigation via previous and next buttons
		dateObject.setMonth(dateObject.getMonth() - 1);
	} else if (whichMonth === 1)	{
		dateObject.setMonth(dateObject.getMonth() + 1);
	}
	
	// Setting variable values
	month = dateObject.getMonth();
	year = dateObject.getFullYear();
	dateObject.setDate(1);
	dayOfWeek = dateObject.getDay();
	captionValue = monthArray[month] + " " + year;
	document.querySelector("#cal table caption").innerHTML = captionValue;
	
	// Sets the number of days in a month
	if (month === 0 || month === 2 || month === 4 ||
		month === 6 || month === 7 || month === 9 ||
		month === 11)	{ // Jan, Mar, Mar, Jul, Aug, Oct, Dec
			daysInMonth = 31;
		} else if (month === 1) { // Feb
			if (year % 4 === 0)	{ // Leap year test
				if (year % 100 === 0)	{
					// Years ending in 00 are not a leap year unless
					// divisible by 400
					if (year % 400 === 0)	{
						daysInMonth = 29;
					} else	{
						daysInMonth = 28;
					}
				} else	{
					daysInMonth = 29;
				}
			} else	{
				daysInMonth = 28;
			}
		} else	{ // Apr, Jun, Sep, Nov
			daysInMonth = 30;
		}
		
		dateCells = document.getElementsByTagName("td");
		for (var i = 0; i < dateCells.length; i++)	{
			// Clear existing table dates
			dateCells[i].innerHTML = "";
			dateCells[i].className = "";
		}
		
		for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++)	{
			// Adds dates to days cells
			dateCells[i].innerHTML = dateObject.getDate();
			dateCells[i].className = "date";
			if (dateToday < dateObject)	{
				dateCells[i].className = "futuredate";
			}
			date = dateObject.getDate() + 1;
			dateObject.setDate(date);
		}
		
		dateObject.setMonth(dateObject.getMonth() - 1);
		// Reset month to month shown
		document.getElementById("cal").style.display = "block";
		// Displays calendar if it's not already visible
}



/* Stores date selected */
function selectDate(event)	{
	if (event === undefined)	{ // Get caller element in IE8
		event = window.event;
	}
	
	var callerElement = event.target || event.srcElement;
	
	if (callerElement.innterHTML === "")	{
		// Cell contains no date, so don't close the calendar
		document.getElementById("cal").style.display = "block";
		return false;
	}
	
	dateObject.setDate(callerElement.innerHTML);
	
	var fullDateToday = new Date();
	var dateToday = Date.UTC(fullDateToday.getFullYear(),
			fullDateToday.getMonth(), fullDateToday.getDate());
	var selectedDate = Date.UTC(dateObject.getFullYear(),
			dateObject.getMonth(), dateObject.getDate());
	
	document.getElementById("pickDate").value =
				dateObject.toLocaleDateString();
				
	hideCalendar(); 
	// Executes the hideCalendar function
	updateCountdown();
	// Executes the updateCountdown function
}



/* Closes Calendar via button or after selection */
function hideCalendar()	{
	document.getElementById("cal").style.display = "none";
}



/* CLUSTER: Changes the month when prev or next is clicked */
function prevMo()	{
	displayCalendar(-1);
}

function nextMo()	{
	displayCalendar(1);
} // END CLUSTER



/* Calculates the time since/until selected date */
function updateCountdown()	{
	var dateToday = new Date();
	var dateFrom = Date.UTC(dateToday.getFullYear(),
			dateToday.getMonth(), dateToday.getDate())
	var dateTo = Date.UTC(dateObject.getFullYear(),
			dateObject.getMonth(), dateObject.getDate());
	var selectedDate = Date.UTC(dateObject.getFullYear(),
			dateObject.getMonth(), dateObject.getDate());
		
		
	if (selectedDate >= dateToday)	{
			// Years
		var yearsUntil = Math.floor((dateTo - dateFrom) / 31556952000);
		document.getElementById("elapTime").innerHTML += "There are " + yearsUntil +" years, ";
		
			// Months
		var yearSeg = (dateTo - dateFrom) % 31556952000;
		var monthsUntil = Math.floor(yearSeg / 2629746000);
		document.getElementById("elapTime").innerHTML += monthsUntil + " months, and ";
		
			// Days
		var monthSeg = (yearSeg) % 2629746000;
		var daysUntil = Math.floor(monthSeg / 86400000);
		document.getElementById("elapTime").innerHTML += daysUntil + " days left.";
	} else if (selectedDate <= dateToday)	{
				// Years
		var yearsUntil = Math.floor((dateFrom - dateTo) / 31556952000);
		document.getElementById("elapTime").innerHTML += "It has been " + yearsUntil +" years, ";
		
			// Months
		var yearSeg = (dateFrom - dateTo) % 31556952000;
		var monthsUntil = Math.floor(yearSeg / 2629746000);
		document.getElementById("elapTime").innerHTML += monthsUntil + " months, and ";
		
			// Days
		var monthSeg = (yearSeg) % 2629746000;
		var daysUntil = Math.floor(monthSeg / 86400000);
		document.getElementById("elapTime").innerHTML += daysUntil + " days since.";
	}
}



/* Event Listeners */
function createEventListeners()	{
	var dateField = document.getElementById("pickDate");
		// Opens the calendar when clicked
	if (dateField.addEventListener)	{
		dateField.addEventListener("click", displayCalendar, false);
	} else if (dateField.attachEvent)	{
		dateField.attachEvent("onclick", displayCalendar);
	}
	
	var dateCells = document.getElementsByTagName("td");
		// Selects date when clicked
	if (dateCells[0].addEventListener)	{
		for (var i = 0; i < dateCells.length; i++)	{
			dateCells[i].addEventListener("click", selectDate, false);
		}
	} else if (dateCells[0].attachEvent)	{
		for (var i = 0; i < dateCells.length; i++)	{
			dateCells[i].attachEvent("onclick", selectDate);
		}
	}
	
	var closeButton = document.getElementById("close");
		// Closes the calendar when clicked
	if (closeButton.addEventListener)	{
		closeButton.addEventListener("click", hideCalendar, false);
	} else if (closeButton.attachEvent)	{
		closeButton.attachEvent("onclick", hideCalendar);
	}
	
	var prevLink = document.getElementById("prev");
	var nextLink = document.getElementById("next");
		// Changes month when prev or next is clicked
	if (prevLink.addEventListener)	{
		prevLink.addEventListener("click", prevMo, false);
		nextLink.addEventListener("click", nextMo, false);
	} else if (prevLink.attachEvent)	{
		prevLink.attachEvent("onclick", prevMo);
		nextLink.attachEvent("onclick", nextMo);
	}
}



/* Runs Event Listeners on page load */
if (window.addEventListener)	{
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent)	{
	window.attachEvent("onload", createEventListeners);
}