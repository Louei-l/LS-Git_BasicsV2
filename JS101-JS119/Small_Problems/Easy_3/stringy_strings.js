function stringy (num) {
  //if number is even work with '10'
  let output;
  if (num % 2 === 0) {
    output = '10'.repeat(num / 2);
  } else { //number if odd so we do same logic as even and just add a 1 at the end
    output = '10'.repeat(num / 2) + '1';
  }
  return output;
}

console.log(stringy(6));
console.log(stringy(7));