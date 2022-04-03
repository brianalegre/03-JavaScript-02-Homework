# 03-JavaScript-02-Homework















# Articles and Notes
window.alert(message);
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- Broswer Prompts
- Message needs to be in ""
- Gives only an OK button
- - Example: window.alert("Hi There");

alert(message);
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- Alert that doesn't require a response
- Gives only an OK button
- - Exampe: alert("Hello");


window.confirm(message)
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
- Returns a boolean, TRUE or FALSE
- True - OK
- False - Cancel
- - Example: window.confirm("Click OK to Leave or Cancel to stay");


window.prompt(message, default)
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
- Asks for user input
- if default is not used, value is assigned as Undefined 
- - Example: window.prompt("What is your name", 'enter your name');