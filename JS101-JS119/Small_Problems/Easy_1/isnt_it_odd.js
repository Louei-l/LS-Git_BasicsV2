/*
Write a function that takes one integer argument, which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.
*/

function isOdd (int) {
  return int % 2 === 0 ? false : true; // for simple arithmetic I rely on the the fact that 0 === -0 is true
}

//verifying output
console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));