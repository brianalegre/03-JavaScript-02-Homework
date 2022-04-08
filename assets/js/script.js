// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", ";", ":", "'", ",", ".", "/", "?", ">", "<", "|", "]", "[", "{", "}"];





function generatePassword() {
  // Ask user for password length
var passwordLength = window.prompt("Enter desired password length, must be at least 8 characters long, and no more than 128 characters")

// Convert passwordLength to Num
var numLength = parseInt(passwordLength, 10);

// Check valid password lenth
if (numLength < 8 || numLength > 128) {
  window.alert("Enter valid password length.  Please start over.");
  return;
}


// -------------------------------------------------------------------------------------
// Ask user for confirmUpper
var confirmLower = window.confirm("Do you want lowercase characters?")


// -------------------------------------------------------------------------------------
// Ask user for confirmUpper
var confirmUpper = window.confirm("Do you want uppercase characters?")


// -------------------------------------------------------------------------------------
// Ask user for confirmNumber
var confirmNumber = window.confirm("Do you want numeric characters?")


// -------------------------------------------------------------------------------------
// Ask user for confirmSpecial
var confirmSpecial = window.confirm("Do you want special characters?")


// -------------------------------------------------------------------------------------
// Atleast one character type must be selected
if (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false ) {
  window.alert("You need to pick at least one")
  console.log("Something went wrong, none were selected");
  return;
  }

  // console.log(confirmLower);
  // console.log(confirmUpper);
  // console.log(confirmNumber);
  // console.log(confirmSpecial);
  


// function generatePassword(numLength, confirmLower, confirmUpper, confirmNumber, confirmUpper, confirmSpecial) {
//   userSelection();
  var setChars = [];
  var password = [];


  // Add Characters based on useSelection
  if (confirmLower) setChars = lowerCase;
  if (confirmUpper) setChars = setChars.concat(upperCase);
  if (confirmNumber) setChars = setChars.concat(number);
  if (confirmSpecial) setChars = setChars.concat(special)

  // Print Variables to console
// console.log(lowerCase);
// console.log(upperCase);
// console.log(number);
// console.log(special);

// console.log(confirmLower);
// console.log(confirmUpper);
// console.log(confirmNumber);
// console.log(confirmSpecial);


  for (let i = 0; i < numLength; i++) {
    var character = setChars[Math.floor(Math.random() * setChars.length)]
    password.push(character);
    // console.log(password.join(''));

  }
  return password.join('');
}


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







// -------------------------------------------------------------------------------------
// *************************************************************************************
// 
// 
//                        UNUSED CODE SECTION
// 
// 
// *************************************************************************************
// -------------------------------------------------------------------------------------

// Used for available characters based on user selection
// var setChars = [];
// // All characters for password
// var allCharPass = [];

// Print Variables to console
// console.log(lowerCase);
// console.log(upperCase);
// console.log(number);
// console.log(special);


// -------------------------------------------------------------------------------------
// Generate password only using lowerCase
// Get random index from array of options
// var r = Math.floor(Math.random() * lowerCase.length);

// // Empty variable to push() to
// var lowerCasePass = [];

// // For loop, selecting random index then push to lowerCasePass
// for (let i = 0; i < numLength; i++) {
//   lowerCasePass.push(lowerCaseChar[r]);
//   // Reselects another random number
//    r = Math.floor(Math.random() * lowerCase.length);
//   // Checking value of r
//   // console.log("var r = " + r);
// }
// // Check lowerCasePass
// console.log("lowerCasePass is: " + lowerCasePass);

// // Check value of r
// // console.log("var r = " + r);


// // -------------------------------------------------------------------------------------
// // Generate password only using lowerCase and upperCase

// // Two variables for password
// var lowerUpperPass = [];
// for (let j = 0; j < numLength; j++) {
//   lowerUpperPass.push(lowerCaseChar[r]);
//   lowerUpperPass.push(upperCaseChar[r]);
//   r = Math.floor(Math.random() * lowerCase.length);
// }

// // Check value of lowerUpperPass
// console.log("lowerUpperPass is: " + lowerUpperPass);
// // lowerUpperPass is numLength x2 - need to fix




// Set Character Limit for the password based on user input
// allCharPass.length = numLength;  // gets weird results


// Long Version 
// 
// for (let j = 0; j < numLength; j++) {
//   allCharPass.push(lowerCaseChar[l]);
//     var l = Math.floor(Math.random() * lowerCase.length); 
//   allCharPass.push(upperCaseChar[u]);
//     var u = Math.floor(Math.random() * upperCase.length);
//   allCharPass.push(numberChar[n]);
//     var n = Math.floor(Math.random() * number.length); 
//   allCharPass.push(specialChar[s]);
//     var s = Math.floor(Math.random() * special.length);  
// }


// Checking variable type
// console.log("passwordLength is a :" + typeof passwordLength);
// console.log("numLength is a :" + typeof numLength);