// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", ";", ":", "'", ",", ".", "/", "?", ">", "<", "|", "]", "[", "{", "}"];


// Function for generating the password
function generatePassword() {
  // Ask user for password length
var passwordLength = window.prompt("Enter desired password length, must be at least 8 characters long, and no more than 128 characters")


// Check if passwordLength is a number
if (isNaN(passwordLength)){
  window.alert("Entry was not a number.  Please start over");
  return;
} else if (!passwordLength) {
  window.alert("No value entered.  Please start over");
  return;
}


// Convert passwordLength to Num
var numLength = parseInt(passwordLength, 10);

// Check valid password lenth
if (numLength < 8 || numLength > 128) {
  window.alert("Enter a valid password length.  Please start over.");
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

// Open variable for inputting available characters for password
  var setChars = [];
  var password = [];


  // Add Characters based on useSelection
  if (confirmLower) setChars = lowerCase;
  if (confirmUpper) setChars = setChars.concat(upperCase);
  if (confirmNumber) setChars = setChars.concat(number);
  if (confirmSpecial) setChars = setChars.concat(special)


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
