//Consider the following code:

function foo(bar) {
  console.log(bar());
}

foo(qux);    // Should print 'Welcome'
foo(jbx);    // Should print 3.1415
foo(abc);    // Should print [1, 2, 3]

//As written, this code will raise an error on line 7. 
// Without modifying the function definition of foo, 
// update this code to print the desired text.

function qux() {
  return 'Welcome'
}

function jbx() {
  return 3.1415;
}

function abc() {
  return [1, 2, 3];
}