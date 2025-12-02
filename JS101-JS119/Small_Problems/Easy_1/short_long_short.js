/**
 * Write a function that takes two strings as arguments, 
 * determines the length of the two strings, 
 * and then returns the result of concatenating the shorter string, 
 * the longer string, and the shorter string once again. 
 * You may assume that the strings are of different lengths.
 */

function shortLongShort(str1, str2) {
  const lengthStr1 = str1.length;
  const lengthStr2 = str2.length;
  if (lengthStr1 < lengthStr2) {
    return str1.concat(str2, str1);
  } else if (lengthStr1 > lengthStr2) {
      return str2.concat(str1, str2);
    }
  return str1.concat(str2, str1); // if both lengths are equal we default to one choice.
}

//verify output
console.log(shortLongShort('abcd', 'efg'));
console.log(shortLongShort('abc', 'defg'));
console.log(shortLongShort('abc', 'def'));