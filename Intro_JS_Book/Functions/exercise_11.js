/*
function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

Question: Using the code from Exercise 9/10, are the left and right variables on lines 2 and 3 
          the same as the left and right variables on lines 11-13? Explain your reasoning.


ANS:  the variable is the same in terms of value, undefined, when the function is declared. Then the same 
      variables get reasigned on lines 11 and 12. On line 13 the variables are same. 
Learning: got everything wrong :) 

They are not the same variables.

The left and right variables declared on lines 11 and 12 are a little tricky. 
First, though they have the same names as the parameters defined for the multiply function, 
they are not the same variables. (The function parameters shadow the variables on lines 11 and 12.) 
Furthermore, they are global variables even though they are only accessible on line 13 (technically, 
left is also accessible on line 11 but is not used). They are considered global because they are defined 
at the topmost level of the program.

The left and right parameters on line 2 are local variables since function parameters are always local 
to the function. Thus, line 3 refers to the local variables.
     
*/