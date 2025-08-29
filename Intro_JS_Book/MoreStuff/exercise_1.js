// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// so both array1 and array 2 refernce the same array object.
// so if one changes the object the other one will also take this cange into account
// output ==> [1,4,3]