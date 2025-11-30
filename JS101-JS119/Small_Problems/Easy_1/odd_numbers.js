/*
Log all odd numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.
*/

for (let n = 1; n <= 99; n +=1) {
  if (n % 2 !==0) {
    console.log(n);
  }
};