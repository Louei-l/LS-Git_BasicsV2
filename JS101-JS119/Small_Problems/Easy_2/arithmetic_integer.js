const readlineSync = require('readline-sync');
const firstNumber = parseInt(readlineSync.question('Please enter the first number: '), 10);
const secondNumber = parseInt(readlineSync.question('Please enter the second number: '), 10);

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);