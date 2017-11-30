/*
WhosIts and WhatsIts
Author: Katrina Ward
Date: 11/29/2017
*/

"use strict";


/* Global Variables */
var waitForUser;



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
	
//	document.getElementById("lat2").innerHTML = " Latitude: " + currPosLat;
//	document.getElementById("lon2").innerHTML = " Longitude: " + currPosLng;
//	document.getElementById("alt2").innerHTML = " Altitude: " + currPosAlt;

	$("#lat2,#lon2,#alt2").show();

	$("#lat2").html(' Latitude: ' + currPosLat);
	$("#lon2").html(" Longitude: " + currPosLng);
	$("#alt2").html(" Altitude: " + currPosAlt);
}



/* Location not available or not allowed */
function fail()	{
//	document.getElementById("err").innerHTML = "Unable to obtain your 
//	location.";
	
	$("#err").show();
	
	$("#err").html("Unable to obtain your location.");
}



/* Runs loadDirections function upon page load */

/*
if (window.addEventListener)	{
	window.addEventListener("load", geoTest, false);
} else if (window.attachEvent)	{
	window.attachEvent("onload", geoTest);
}
*/

$().ready(geoTest);
