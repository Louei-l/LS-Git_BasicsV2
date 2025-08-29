function isNotANumber(input) {
  if(typeof input !== 'number') return false;
  if (input === input) return false;
  return true;
}

console.log(isNotANumber(0/0));
// super happy to have solved by myself without hints !!
// the trick was NaN is the only 'number' from number data type that does not equal to itself.