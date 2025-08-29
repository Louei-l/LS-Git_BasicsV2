function whichZero(input) {
  if(1/input === Infinity) return false;
  return true;
}

console.log(whichZero(0));
console.log(whichZero(-0));
//super happy to have solved by myself without hints !!