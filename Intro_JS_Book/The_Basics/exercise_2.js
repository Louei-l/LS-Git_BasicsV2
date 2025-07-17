/* the trick with remainder operator is % 10 slices off the last signle digit and returns it.
  So what we need to do is to get each desired number to be the last one. 
   hence the logical steps are 
   1. use %10 and get the last digit
   2. subtract the remainder 
   3. divie by 10 to move to the next digit and repeat step 1.
*/

let num4936 = 4936;
let ones = num4936 % 10; // we got 6
console.log('Ones is =' , ones);

// we get 3 as last number to slice it off with % 

let num493 = (num4936 - ones) / 10;
let tens = num493 % 10; // we got 3
console.log('Tens is =' , tens);

// move to number 9 to slice it off with %

let num49 = (num493 - tens) / 10;
let hundreds = num49 % 10; // got 9
console.log('Hundreds is =' , hundreds);

// now last digit 4

let thousands = (num49 - hundreds) / 10;
console.log('Thousands is =' , thousands);
