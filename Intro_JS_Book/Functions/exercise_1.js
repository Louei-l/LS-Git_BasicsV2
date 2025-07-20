let bar = 1; // => global variable

function foo () {
  let bar = 2; // => local varible
               // => no return or console.log 


}

foo(); // => no output
console.log(bar); // => 1 - can only see the global variable 

//----------------------------------------------------------------------------------

let bar = 1; // => global varible

function foo () {
  bar = 2; // => reassigns the variable bar to point at two
               // => no return or console.log 


}

foo(); // => no output
console.log(bar); // => 2 

