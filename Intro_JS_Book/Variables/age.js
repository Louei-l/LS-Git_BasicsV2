let age = 20;
let decade = 10;
for (i = 0; i < 4; i++) { //looping through decades and increasing decade by 10 with each loop
  newAge = age + decade;
  console.log(`In ${decade} years, you will be ${newAge} years old.`);
  decade = decade + 10;
}