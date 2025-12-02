/**
 * Create a simple tip calculator. 
 * The program should prompt for a bill amount and a tip rate. 
 * The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
 * You can ignore input validation and assume that the user will enter valid positive numbers.
 */


const readlineSync = require('readline-sync');
const billAmount = parseFloat(readlineSync.question('Please enter the total bill amount: '));
const tipPercentage = parseFloat(readlineSync.question('Please enter the tip percentage: '));
const tipAmount = billAmount * (tipPercentage / 100);
const totalBill = billAmount + tipAmount;
console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The bill is $${totalBill.toFixed(2)}`);