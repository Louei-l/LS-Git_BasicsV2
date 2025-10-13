let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// sale is true (truthy)
// admissionPrice is equal to opposite of sale, so it will be falsy
// ternary check will go for falsy option so 3.99 will be logged.