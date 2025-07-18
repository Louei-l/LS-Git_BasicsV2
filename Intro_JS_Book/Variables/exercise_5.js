let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // => prints bar

// Reason, variable scope. foo = 'bar' is in outter block (global) level, 
// while foo = 'qux' is bound to the scope of the block it was created in
// console.log only sees the global scope varibale in this code.