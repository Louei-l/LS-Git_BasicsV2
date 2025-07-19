function add(a, b) {
  return a + b;
}

//let sumTwoNumbers = (4, 4);
//console.log(sumTwoNumbers);
//console.log(add(5, 5));

//just messing around with realine-sync
let rlSync = require('readline-sync');
let num1 = Number(rlSync.question('Please enter first number...  '));
let num2 = Number(rlSync.question('Please enter second number...  '));
let sum = add(num1, num2);
console.log(`The sum of two numbers is ${sum}.`);