function multiply(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return NaN;
  return num1 * num2;
}

console.log(multiply(5, 'you') === 15); //false
console.log(multiply(5, 3) === 15); // true