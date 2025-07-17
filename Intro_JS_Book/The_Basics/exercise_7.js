/* Will an error occur if you try to access an array element with an index 
   that is greater than or equal to the length of the array? For example:

   let foo = ['a', 'b', 'c'];
   console.log(foo.length);  // => 3
   console.log(foo[3]);      // will this result in an error?

   Answer: they array contains index range of 0-2, index 3 does not exist..
           most likely we will get an error.
    
   Correction: got this one wrong, it looks like engine does not throw an error but instead we get undefined.
   */

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
