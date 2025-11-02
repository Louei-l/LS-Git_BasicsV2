const isBlank = (str) => {
  const charCount = str.length;
  const checkSpace = /^\s*$/.test(str);
  if (charCount === 0 || checkSpace){
    return true;
  }
  return false;
}

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));