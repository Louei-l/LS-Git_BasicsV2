/**
 * Build a program that asks the user to enter the length and width of a room in meters, 
 * and then logs the area of the room to the console in both square meters and square feet.
 */

let readlineSync = require('readline-sync');
let length = parseFloat(readlineSync.question('Enter the length of the room in meters: '));
let width = parseFloat(readlineSync.question('Enter the width of the room in meters: '));
const areaMeters = Number((length * width).toFixed(2));
const areaFeet = Number((areaMeters * 10.7639).toFixed(2));
console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);