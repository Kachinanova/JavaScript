/*	
WhosIts and WhatsIts
Author: Katrina Ward
Date: 10/13/2017
 */
 
 /* Global Variables */
 var cellData = document.getElementsByName("info");
 
 /* Array for information table */
 var userInfo = ["Operating System:", navigator.platform,
				"Browser:", navigator.userAgent,
				"Browser Version:", navigator.appVersion,
				"Location:", navigator.geolocation,
				"Resolution:", screen.width + " x " + screen.height];
 
 
 /* Populates user info into table */
 function userStats() {
	 var i = 0;
	 while (i < userInfo.length) {
		 cellData[i].innerHTML = userInfo[i];
		 i++;
	 }
 }
 
 /* Runs userStats when loaded */
 if (window.addEventListener) {
	 window.addEventListener("load", userStats, false);
 } else if (window.attachEvent) {
	 window.attachEvent("onload", userStats);
 }