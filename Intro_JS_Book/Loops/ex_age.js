let rlSync = require('readline-sync');
let age = Number(rlSync.question('Please enter your age...\n'));
console.log(`Your are ${age} years old.`);
let decade = 10;

for(i = 0; i < 4; i++) {
  let newAge = age + decade;
  console.log(`In ${decade} years, you will be ${newAge} years old.`);
  decade = decade + 10;
}