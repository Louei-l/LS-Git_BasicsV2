const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// My understanding is that there will be no error because of the scope. 
// console.log(FOO) ==> output bar
// After running the code, got confirmation that my understanding is correct.