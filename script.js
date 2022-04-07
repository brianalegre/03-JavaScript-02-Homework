// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", ";", ":", "'", ",", ".", "/", "?", ">", "<", "|", "]", "[", "{", "}"];


// Print Variables to console
// console.log(lowerCase);
// console.log(upperCase);
// console.log(number);
// console.log(special);

// -------------------------------------------------------------------------------------
// Ask user for password length
var passwordLength = window.prompt("Enter desired password length, must be at least 8 characters long, and no more than 128 characters")

// Convert passwordLength to Num
var numLength = parseInt(passwordLength, 10);


// Check valid password lenth
if (numLength < 8 || numLength > 128) {
  window.alert("Enter valid password length.  Please start over.");
}

// Print Variable to console
// console.log("The password length is: " + numLength);

// -------------------------------------------------------------------------------------
// Ask user for confirmUpper
var confirmLower = window.confirm("Do you want lowercase characters?")

// Check for lowerCase usage
if (confirmLower) {
  var lowerCaseChar = lowerCase;
} else {
  var lowerCaseChar = null;
}

// Print Variable to console
// console.log("lowerCaseChar set to: " + lowerCaseChar);

// -------------------------------------------------------------------------------------
// Ask user for confirmUpper
var confirmUpper = window.confirm("Do you want uppercase characters?")

// Check for uppercase usage
if (confirmUpper) {
  var upperCaseChar = upperCase;
} else {
  var upperCaseChar = null;
}

// Print Variable to console
// console.log("upperCaseChar set to: " +upperCaseChar);


// -------------------------------------------------------------------------------------
// Ask user for confirmNumber
var confirmNumber = window.confirm("Do you want numeric characters?")

// Check for uppercase usage
if (confirmNumber) {
  var numberChar = number;
} else {
  var numberChar = null;
}

// Print Variable to console
// console.log("numberChar set to: " + numberChar);


// -------------------------------------------------------------------------------------
// Ask user for confirmSpecial
var confirmSpecial = window.confirm("Do you want special characters?")

// Check for uppercase usage
if (confirmSpecial) {
  var specialChar = special;
} else {
  var specialChar = null;
}

// Print Variable to console
console.log("specialChar set to: " + specialChar);


// Atleast one character type must be selected
if (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false ) {
  window.alert("You need to pick at least one")
  console.log("Something went wrong, none were selected");
  }





// -------------------------------------------------------------------------------------
// Generate password only using lowerCase

// Get random index from array of options
var r = Math.floor(Math.random() * lowerCase.length);

// Empty variable to push() to
var lowerCasePass = [];

// For loop, selecting random index then push to lowerCasePass
for (let i = 0; i < numLength; i++) {
  lowerCasePass.push(lowerCaseChar[r]);
  // Reselects another random number
   r = Math.floor(Math.random() * lowerCase.length);
  // Checking value of r
  // console.log("var r = " + r);
}
// Check lowerCasePass
console.log("lowerCasePass is: " + lowerCasePass);

// Check value of r
// console.log("var r = " + r);


// -------------------------------------------------------------------------------------
// Generate password only using lowerCase and upperCase

// Two variables for password
var lowerUpperPass = [];
for (let j = 0; j < numLength; j++) {
  lowerUpperPass.push(lowerCaseChar[r]);
  lowerUpperPass.push(upperCaseChar[r]);
  r = Math.floor(Math.random() * lowerCase.length);
}

// Check value of lowerUpperPass
console.log("lowerUpperPass is: " + lowerUpperPass);
// lowerUpperPass is numLength x2 - need to fix


// -------------------------------------------------------------------------------------
// Generate password using all characters

// Random index from array of options
// l for lowerCaseChar
// length = 26
var l = Math.floor(Math.random() * lowerCase.length);     

// l for lowerCaseChar
// length = 26
var u = Math.floor(Math.random() * upperCase.length);     

// l for lowerCaseChar
// length = 10
var n = Math.floor(Math.random() * number.length);        

// l for lowerCaseChar
// length = 30
var s = Math.floor(Math.random() * special.length);       





// All characters for password
var allCharPass = [];

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


// Short Version
// 
for (let k = 0; k < numLength; k++) {
  allCharPass.push(lowerCaseChar[l],upperCaseChar[u], numberChar[n], specialChar[s])
    var l = Math.floor(Math.random() * lowerCase.length); 
    var u = Math.floor(Math.random() * upperCase.length);
    var n = Math.floor(Math.random() * number.length); 
    var s = Math.floor(Math.random() * special.length);  
}

// Check value of lowerUpperPass
console.log(allCharPass);
console.log("allCharPass is: " + allCharPass);
// allCharPass is numLength x4 - need to fix

// Remove all commas in password
console.log(allCharPass.join(''));
console.log("No Commas, allCharPass is: " + allCharPass.join(''));


//  Get random characters from allCharPass for genPass
var genPass = []

for (let g = 0; g < numLength; g++) {
  genPass.push(allCharPass[g])
}

console.log(genPass);
console.log("Generated Password is: " + genPass.join(''));



















// Password Variable
var password = [];

// Function for populating password
// function generatePassword(genLength, genLower, genUpper, genNumber, genSpecial) {
//   // genLength = passwordLength;
//   genLower = confirmLower;
//   genUpper= confirmUpper;
//   genNumber = confirmNumber;
//   genSpecial = confirmSpecial;
//   for (let i = 0; i < genLength; i++) {
//     password.push(genSpecial[i])
//     console.log(password)
//   }
// }

// generatePassword(passwordLength, confirmLower, confirmUpper, confirmNumber, confirmSpecial);




// // Checking variable type
// console.log("passwordLength is a :" + typeof passwordLength);
// console.log("numLength is a :" + typeof numLength);


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



