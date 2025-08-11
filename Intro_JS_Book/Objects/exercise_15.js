// dentify all of the variables, object property names, 
// primitive values, and objects shown in the following code 

function bar(arg1, arg2) { // => function bar is object | bar is a variable | arg1,arg2 are function scoped varibales
  let foo = 'Hello'; // => foo is function scoped variable that points to primitive value
  const qux = { // => qux is a varibale that points to an object | abc,def,ghi,jkl,nmo,pqr are object property names | 
    abc: [1, 2, 3, [4, 5, 6]], // => [1, 2, 3, [4, 5, 6]] is an arry object | [4, 5, 6] is an array object | 0,1,2,3 of outter array are index keys which are object property names | 0,1,2 are index keys which are object property name
    def: null, // => null is a primitive
    ghi: NaN, // => NaN is a primitive
    jkl: foo, // => variable that points to hello
    mno: arg1, // => varibale points to arg1
    pqr: arg2, // varibale points to arg2
  };

  return qux; // => qux is a variabel that referrences the object
}

let result = bar('Victor', 'Antonina'); // => result is a varibale that points to the retunr of the function bar | bar is a variable that points to the function | 'Victor' and 'Antonina' are arguments that are passed to arg1 and arg2 of the bar function