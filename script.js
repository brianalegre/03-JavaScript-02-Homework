// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", ";", ":", "'", ",", ".", "/", "?", ">", "<", "|", "]", "[", "{", "}"];


// Print Variables to console
console.log(lowerCase);
console.log(upperCase);
console.log(number);
console.log(special);

// -------------------------------------------------------------------------------------
// Ask user for password length
var passwordLength = window.prompt("Enter desired password length, must be at least 8 characters long, and no more than 128 characters")

// Check valid password lenth
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Enter valid password length.  Please start over.");
}

// Print Variable to console
console.log(passwordLength);

// -------------------------------------------------------------------------------------
// Ask user for confirmUpper
var confirmLower = window.confirm("Do you want lowercase characters?")

// Check for lowerCase usage
if (confirmLower) {
  confirmLower = lowerCase;
} else {
  confirmLower = null;
}

// Print Variable to console
console.log(confirmLower);

// -------------------------------------------------------------------------------------
// Ask user for confirmUpper
var confirmUpper = window.confirm("Do you want uppercase characters?")

// Check for uppercase usage
if (confirmUpper) {
  confirmUpper = upperCase;
} else {
  confirmUpper = null;
}

// Print Variable to console
console.log(confirmLower);


// -------------------------------------------------------------------------------------
// Ask user for confirmNumber
var confirmNumber = window.confirm("Do you want numeric characters?")

// Check for uppercase usage
if (confirmNumber) {
  confirmNumber = number;
} else {
  confirmNumber = null;
}

// Print Variable to console
console.log(confirmNumber);


// -------------------------------------------------------------------------------------
// Ask user for confirmSpecial
var confirmSpecial = window.confirm("Do you want special characters?")

// Check for uppercase usage
if (confirmSpecial) {
  confirmSpecial = special;
} else {
  confirmSpecial = null;
}

// Print Variable to console
console.log(confirmSpecial);

















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


// // Broswer Prompts
// // Needs message to be in ""
// // Gives only an OK button
// window.alert("Hi there");

// // Alert that doesn't require a response
// // Gives only an OK button
// alert("Hello");

// // Returns a boolean, TRUE or FALSE
// // True - OK
// // False - Cancel
// window.confirm("Click OK to Leave or Cancel to stay");


// // Asks for user input
// // if default is not used, value is assigned as Undefined 
// //  ** window.prompt(message, default) **
// window.prompt("What is your name", 'enter your name');

// console.log(generateBtn);


