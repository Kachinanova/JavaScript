/*
WhosIts and WhatsIts
Author: Katrina Ward
Date: 09/16/2017
*/


/* I used a walkthrough to make this. The code is copied, however I commented it as I went. The only lines I didn't comments are ones I'd commented prior in the code (repeats). The walkthrough is from: http://thecodeplayer.com/walkthrough/javascript-css3-calculator */


/* Global Variables */
var keys = document.querySelectorAll('#calculator span'); // Identifies button values
var operators = ['+', '-', 'x', '÷']; // defines operator variables
var decimalAdded = false; // Setting decimal value to false untill pressed


/* Adds onclick event to all keys, preforms operations */
for(var i = 0; i < keys.length; i++) { // Moves cursor right one space each time button is pressed. (Adds one character to current screen value.)
	keys[i].onclick = function(e) { // Performs function when button pressed
	
		/* Get input, button values */
		var input = document.querySelector('.screen'); // Pulls screen display
		var inputVal = input.innerHTML; // Holds current equation
		var btnVal = this.innerHTML; // Assigns button values when pressed
		
		/* Clears screen */
		if(btnVal == 'C') { // Checks if "C" was pressed
			input.innerHTML = ''; // Resets to empty input value
			decimalAdded = false; // Keeps decimal value false
		}
		
		/* Performs user equation, displays result */
		else if(btnVal == '=') { // Executes upon button press
			var equation = inputVal; // Writes answer to screen
			var lastChar = equation[equation.length - 1]; // Omits the "=" from answer
			
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/'); // Replaces x with * and ? with /
			
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.') // Checks for unessesary decimal
				equation = equation.replace(/.$/, ''); // Replaces special characters with a void (erasing it)
			
			if(equation)
				input.innerHTML = eval(equation); // Evaluates the equation
				
			decimalAdded = false; 
		}
		
		/* Sets rules for operator input, corrects as needed*/
		else if(operators.indexOf(btnVal) > -1) { // Reads which operator pressed
			
			var lastChar = inputVal[inputVal.length - 1]; // Gets last character
			
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) // Prevents any operator other than "-" as first input
				input.innerHTML += btnVal; // Adds operator value to current screen value
			
			
			else if(inputVal == '' && btnVal == '-') // Checks if first value is empty or "-"
				input.innerHTML += btnVal; // Adds button value if empty or "-"
			
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) { // Checks if last input was an operator and if there is more than one character
				input.innerHTML = inputVal.replace(/.$/, btnVal); // Replaces last operator with new one when pressed
			}
			
			decimalAdded = false; 
		}
		
		
		/* checking, adding and/or preventing decimal value */
		else if(btnVal == '.') { // Checks if "." is pressed
			if(!decimalAdded) { // If it has, executes following code
				input.innerHTML += btnVal; // Adds decimal value to current screen vlaue
				decimalAdded = true; // Changes value to true, prevents addition of second
			}
		}
		
		
		else {
			input.innerHTML += btnVal; // Adds button value to current screen value when pressed
		}
		
		
		e.preventDefault(); // "Prevents page jumps" -Quoted from original code
		/* Not sure what this means, but am guessing it stops the page from returning to the top when a button is pressed? */
	} 
}