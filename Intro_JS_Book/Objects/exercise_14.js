// dentify all of the variables, object property names, 
// primitive values, and objects shown in the following code 
// (assume the code has not been executed)

function hello(greeting, name) { // => hello = varibale | greeting and name = function scoped variables | function hello = object
  return greeting + ' ' + name; // => greeting and name are function scoped variables once argument strings 'Hi' and 'Grace' are passed they point to primitives
}

function xyzzy() { // => xyzzy = varibale | function xyzzy = object
  return { a: 1, b: 2, c: [3, 4, 5], d: {} }; // => a,b,c,d = object property names | { a: 1, b: 2, c: [3, 4, 5], d: {} } = object | [3, 4, 5] = object | {} = object | 1,2,3,4,5 = primitives
}

const howdy = hello('Hi', 'Grace'); // => howdy is a varibale | "Hi" and "Grace" are pimitve arguments
let foo = xyzzy(); // => foo is a varibale