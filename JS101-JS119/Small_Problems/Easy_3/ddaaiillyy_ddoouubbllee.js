function crunch(str) {
  if (typeof str !== 'string') {
    throw new Error('please enter a string');
  }

  let crunchedString = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== str[index + 1]){ // the last character will still be appended because it will be compared to undefined. This is intentional.
      crunchedString += str[index];
    }
  } return crunchedString;

} 
  

  


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""