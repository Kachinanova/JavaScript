/*
WhosIts and WhatsIts
Author: Katrina Ward
Date: 11/18/2017
*/

"use strict";


/* Global Variables */
var waitForUser;



/*  */
function loadDirections(string)	{
	
	if (typeof google !== 'object') {
		var script = document.createElement("script");
		script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback=geoTest";
		document.body.appendChild(script);
	}
}



/* Tests if location is available, runs functions acordingly */
function geoTest()	{
	waitForUser = setTimeout(fail, 10000);
	
	if (navigator.geolocation)	{
		navigator.geolocation.getCurrentPosition(createDirections, 
			fail, {timeout: 10000});
	} else	{
		fail();
	}
}



/* Runs on successful loaction, writes location to table */
function createDirections(position)	{
	clearTimeout(waitForUser);

	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var currPosAlt = position.coords.altitude;
	var mapOptions = {
		center: new google.maps.LatLng(currPosLat, currPosLng, currPosAlt),  
		zoom: 12
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	document.getElementById("lat").innerHTML = " Latitude: " + currPosLat;
	document.getElementById("lon").innerHTML = " Longitude: " + currPosLng;
	document.getElementById("alt").innerHTML = " Altitude: " + currPosAlt;
}



/* Location not available or not allowed */
function fail()	{
	document.getElementById("map").innerHTML = "Unable to obtain your location.";
}



/* Runs loadDirections function upon page load */
if (window.addEventListener)	{
	window.addEventListener("load", loadDirections, false);
} else if (window.attachEvent)	{
	window.attachEvent("onload", loadDirections);
}