/**
 * Write a function that determines and returns the UTF-16 string value of a string passed in as 
 * an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
 * (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
 */

function utf16Value(string) {
  let sum = 0; 
  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }
  return sum;
}

//verify output
console.log(utf16Value('Four score'));