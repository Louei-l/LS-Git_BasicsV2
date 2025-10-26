let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // false

// the value of b is changed only in the block scope of the if statement.
// once we are out of the if scope the b value is false, as it was declared initially.