/**
 * Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
 * If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.
 */


//the aim is two write an easy to read and follow code. No fancy stuff.
const centerOf = (string) => {
  if (typeof string !== 'string') {
    console.log('please enter valid string');
    return;
  }
  const stringLength = string.length;
  const mid = Math.floor(stringLength / 2);

  //section for stringLength is odd
  if (stringLength % 2 === 1) { //test of odd stingLength
    return string[mid];
  } 

  //section when stringLength is even
  const leftIndex = mid -1;
  const rightIndex = mid;
  const twoCenterCharacters = string[leftIndex] + string[rightIndex];
  return twoCenterCharacters;
}

//verify output
console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('x'));