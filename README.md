# 03-JavaScript-02-Homework






# Requirements
Password Length
- at least 8 characters and no more than 128 characters

Confirmation
- lowercase, uppercase, numeric, and/or special characters

Validation for Input
- at least one character type should be selected

When all prompts are answered
- a password is generated that matches the selected criteri

Password is either displayed in an alert or written to the page










# Articles and Notes
window.alert(message);
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- Broswer Prompts
- Message needs to be in ""
- Gives only an OK button
  - Example: window.alert("Hi There");

alert(message);
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- Alert that doesn't require a response
- Gives only an OK button
  - Exampe: alert("Hello");


window.confirm(message)
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
- Returns a boolean, TRUE or FALSE
- True - OK
- False - Cancel
  - Example: window.confirm("Click OK to Leave or Cancel to stay");


window.prompt(message, default)
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
- Asks for user input
- if default is not used, value is assigned as Undefined 
  - Example: window.prompt("What is your name", 'enter your name');


var generateBtn = document.querySelector("#generate");
- Link: https://www.youtube.com/watch?v=3oOKAJTD2F8
- var generateBtn
  - Create new variable generateBtn
-document.querySelector("#generate")
  - selects the line of code with the ID of generate
  - document. can be changed to tag names to target specify more specificity

.addEventListener()
- Link: https://www.youtube.com/watch?v=XF1_MlZ5l6M
