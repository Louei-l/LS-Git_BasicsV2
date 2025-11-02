const isBlank = (str) => {
  let charCount = str.length;
  return charCount > 0 ? false : true;
}

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));