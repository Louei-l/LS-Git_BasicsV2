function removeLastChar (text) {
  if(typeof text !== 'string') return 'text is not string'
  return text.slice(0, -1)
}



console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'