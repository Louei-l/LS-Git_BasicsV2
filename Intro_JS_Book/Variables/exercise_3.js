/*
{
  let foo = 'bar';
}

console.log(foo);

Answer: foo is declared insde the block {} while console.log is looking for a foo that is outise the block.
        outcome is a refference error, meaning no variable to reffer to due to variable scope.

How to fix it: either declare foo outside the block or put console.log inside the same block where foo
               was originally declared.

*/





let foo = 'barbar'; // option 1

{
  let foo = 'bar'; // option 2
  console.log(foo); // prints => bar from option 2
}

console.log(foo); // => prints barbar from option 1