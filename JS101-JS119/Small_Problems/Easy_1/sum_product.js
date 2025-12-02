/**
 * Write a program that asks the user to enter an integer greater than 0, 
 * then asks whether the user wants to determine the sum or the product of all numbers between 1 
 * and the entered integer, inclusive.
 */

  const readlineSync = require('readline-sync');
  const inputNumber = parseFloat(readlineSync.question('Please enter an integer greater than 0: '));
  const computationChoice = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');
  if (computationChoice === 's') {
    let output = 0;
    for (let i = 1; i <= inputNumber; i += 1) {
      output = output + i;
    } 
    console.log(`the sum of integers between 1 and ${inputNumber} is ${output}`);
  } else {
    let output = 1;
    for (let i = 1; i <= inputNumber; i += 1) {
      output = output * i;
    }
    console.log(`the product of integers between 1 and ${inputNumber} is ${output}`);
  }

