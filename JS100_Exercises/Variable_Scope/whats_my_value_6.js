const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // no output

// there is a global constant a vith value one
// inside function block a is reassigned 2
// muFunction does not have return or log so the function does not do anything beyond reassigning value of 2 to a.

// got this one wrong. Silly mistake, const cant be reassigned. Program will through error about this.

