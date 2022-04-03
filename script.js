// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Broswer Prompts
// Needs message to be in ""
// Gives only an OK button
window.alert("Hi there");

// Alert that doesn't require a response
// Gives only an OK button
alert("Hello");

// Returns a boolean, TRUE or FALSE
// True - OK
// False - Cancel
window.confirm("Click OK to Leave or Cancel to stay");


// Asks for user input
// if default is not used, value is assigned as Undefined 
//  ** window.prompt(message, default) **
window.prompt("What is your name", 'enter your name');



