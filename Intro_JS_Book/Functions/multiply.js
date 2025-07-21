function getInput(prompt) {
  let rlSync = require('readline-sync');
  let input = rlSync.question(prompt);
  return input;
}

let number1 = Number(getInput('Please enter first number  '));
let number2 = Number(getInput('Please enter second number '));

function multiply(num1, num2) {
  return num1 * num2;
}

console.log((`${number1} * ${number2} = `), multiply(number1,number2));