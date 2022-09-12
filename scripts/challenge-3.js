/*
 Challenge 3: Create a length converter function
    
	Creating a function is a skill that'll be useful in many settings, and as 
	you progress, you'll be working on much more complicated functions than this 
	one. But a function that converts units of measure can be pretty handy in 
	multiple professions and industries.

	Let's start with a conversion from kilometers to miles. The function should
	include the input in kilometers and return the answer in miles.

	formula is: miles = kilometers / 1.609
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

//@ts-check
/** @type {HTMLInputElement} */
const input = document.getElementById("kilometers");
const button = document.getElementById("calculate");

// your code starts after this line
