function multiply(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return NaN;
  return num1 * num2;
}

function square(num) {
  if (typeof num !== 'number') return NaN;
  return multiply(num, num);
}

console.log(square(5) === 25); //true
console.log(square('five') === 25); // false