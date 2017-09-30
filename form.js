/*
	WhosIts and WhatsIts
	Author: Katrina Ward
	Date: 9/29/2017
*/

/* Global Variables */
var FNameField = document.forms[0].myFName;
var LNameField = document.forms[0].myLName;
var emailField = document.forms[0].myEmail;
var comField = document.forms[0].myComments;


/* Tracks status of each form field */
var fNameValid = true;
var lNameValid = true;
var emailValid = true;
var comValid = true;


/* Check FName field for correct input, gives error if not */
 function validateFName() {
	 var firstName = document.getElementById("myFName");
	 var isNum = /[0-9.!@#$%&*()+/\=?^,:;"'_`{|}~-]/;
	 var valid = true;
	 var myFNameError = "";
	 try {
		 if(firstName.value == "") {
			 throw "Please enter your first name.";
			 return false;
		 } else if(isNum.test(firstName.value)) {
			 throw "Special characters and numbers are not allowed."
			 return false;
		 }
	 }
	 catch(message) {
		 valid = false;
		 myFNameError = message;
		 firstName.value = "";
		 document.getElementById("fNErrorMsg").innerHTML = myFNameError;
	 }
	 finally {
		 fNameValidated = valid;
	 }
 }
 
/* Checks LName field for correct input, gives error if not*/
 function validateLName() {
	 var lastName = document.getElementById("myLName");
	 var isNum = /[0-9.!@#$%&*()+/\=?^,:;"'_`{|}~-]/;
	 var valid = true;
	 var myLNameError = "";
	 try {
		 if(lastName.value == "") {
			 throw "Please enter your last name.";
			 return false;
		 } else if(isNum.test(lastName.value)) {
			 throw "Special characters and numbers are not allowed."
			 return false;
		 }
	 }
	 catch(message) {
		 valid = false;
		 myLNameError = message;
		 lastName.value = "";
		 document.getElementById("lNErrorMsg").innerHTML = myLNameError;
	 }
	 finally {
		 lNameValidated = valid;
	 }
 }
 
/* Checks email field for correct input, gives error if not */
function validateEmail() {
	var email = document.getElementById("myEmail");
	var valid = true;
	var myEmailError = "";
	try {
		 if(email.value == "") {
			 throw "Please enter your email.";
			 return false;
		 } else if (email.value.search("@") === -1 ||
					email.value.lastIndexOf(".") === -1) {
			 throw "A valid email is required."
			 return false;
		 }
	 }
	 catch(message) {
		 valid = false;
		 myEmailError = message;
		 email.value = "";
		 document.getElementById("emErrorMsg").innerHTML = myEmailError;
	 }
	 finally {
		 emailValidated = valid;
	 }
}

/* Checks comments field for correct input, gives error if not */
function validateComments() {
	var comments = document.getElementById("myComments");
	var valid = true;
	var myCommentsError = "";
	try {
		if(comments.value == "") {
			throw "Please enter your comments.";
			return false;
		}
	}
	catch(message) {
		valid = false;
		myCommentsError = message;
		comments.value = "";
		document.getElementById("comErrorMsg").innerHTML = myCommentsError;
	}
	finally {
		commentsValidated = valid;
	}
}



/* Validates form onsubmit */
function validateForm() {
	validateFName();
	validateLName();
	validateEmail();
	validateComments();
}


/* Resets form on load */
function resetForm() {
	FNameField.value = "";
	LNameField.value = "";
	emailField.value = "";
	comField.value = "";
}


/* Event Listeners */
function createEventListeners() {
	resetForm();
	 document.getElementById("myFName").
		addEventListener("change", validateFName, false);
	 document.getElementById("myLName").
		addEventListener("change", validateLName, false);
	 document.getElementById("myEmail").
		addEventListener("change", validateEmail, false);
}


/* Runs Event Listeners when page finishes loading */
window.addEventListener("load", createEventListeners, false);