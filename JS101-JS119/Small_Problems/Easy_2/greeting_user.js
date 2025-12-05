/**
 * Write a program that will ask for user's name. The program will then greet the user. 
 * If the user writes "name!" then the computer yells back to the user.
 */

const readlineSync = require('readline-sync');
let name = readlineSync.question('What is your name? ').trim();
let chances = 1;

 // giving user 2 more tries to enter their name instead of a blank
while (name.trim().length === 0 && chances < 3) {
  name = readlineSync.question('Name is empty. What is your name? ').trim();
  chances += 1;
}

//we handle blank input after a total of 3 tries
if (name.trim().length === 0) {
  console.log(`Hello stranger.`);  
}


else if (name.endsWith('!')) {
  const cleanName = name.slice(0, -1);
  console.log(`HELLO ${cleanName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} 

else {
  console.log(`Hello ${name}.`);
}