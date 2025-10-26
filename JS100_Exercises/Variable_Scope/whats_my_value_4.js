let a = 1;

function myFunction() {
  console.log(a);
}

myFunction(); // => it will give some kind of a referrence error or not do anything. What I am sure of it will not output 1.

// myFunction has no variable a declared inside it.
// console.log will look for a but will not find it in it's scope.

//got this one wrong.