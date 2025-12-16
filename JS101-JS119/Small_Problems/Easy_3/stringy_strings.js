function stringy (num) {
  if (num === 0) return 'stringy is empty :)';
  if (num === 1) return '1'



  //if number is even work with '10'
  if (num % 2 === 0) {
    return '10'.repeat(num / 2);
  } else { //number is odd so we do same logic as even and just add a 1 at the end
    return '10'.repeat(num / 2) + '1';
  }
}
console.log(stringy(0)); // stringy is empty :)
console.log(stringy(1)); // 1
console.log(stringy(6)); // 101010
console.log(stringy(7)); // 1010101