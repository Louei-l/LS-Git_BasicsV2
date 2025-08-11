//As written, this code will raise an error on line 11. 
// Without creating a new function or changing 
// lines 10 or 11, update this code to work as intended.

function foo(bar) {
  console.log(bar, bar, bar);

}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"