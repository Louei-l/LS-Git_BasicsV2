const extractLanguage = (str) => {
  return typeof str === 'string' ? str.slice(0, 2) : 'enter a string please';
}

console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage(8));



