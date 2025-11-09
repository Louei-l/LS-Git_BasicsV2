//Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

//output will be false, because these are two different objects(array) save in different memory addresses.
//that happen to have same values inside then.
//JS will treat each object as differnet.

console.log(array1 === array2); //=> flase