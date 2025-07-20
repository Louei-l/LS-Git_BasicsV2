

/*
First approach is the simplest one where you console.log the output but do not return the values

let rlSync = require('readline-sync');
function firstLast(first, last) {
   first = rlSync.question('What is your first name?  ');
   last = rlSync.question('What is your last name?  ');
  console.log(`Greetings ${first} ${last}!`);
   
}

firstLast();
*/


// ---------------------------------------------------------------------------------------------------------
/*
This is a second approach where the function does return the two inputs which are captured outside the block
thus making the first and last names accessible to console.log outside the function. 
However I had to google how to return more than one value (ans: use container like arr or obj). The I had to 
also google how to modify the arr into a string and remove the comma. 
Overall this was a great learning oportunity !
*/

let rlSync = require('readline-sync');
function firstLast(first, last) {
   first = rlSync.question('What is your first name?  ');
   last = rlSync.question('What is your last name?  ');
  //console.log(`Greetings ${first} ${last}!`);
  return [first, last]; 
  
}
let fullName = firstLast();
console.log(`Greetings ${(fullName.toString()).replaceAll(",", " ")}!`);

