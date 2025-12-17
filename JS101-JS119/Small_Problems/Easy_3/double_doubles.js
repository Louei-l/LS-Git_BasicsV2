/**
 * A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
 * For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
 * Write a function that returns the number provided as an argument multiplied by two, 
 * unless the argument is a double number, in which case, return the double number as-is.
 */

function twice(num) {
  if (typeof num !== 'number') {
    throw new Error('please enter a number');
  }

  const roundedNumber = Math.round(num);
  const numberInStringForm = roundedNumber.toString();
  const lengthOfNumberInStringForm = numberInStringForm.length;
  
  if (lengthOfNumberInStringForm % 2 === 0) {
    const pairLength = lengthOfNumberInStringForm / 2;
    const leftPair = numberInStringForm.slice(0, pairLength);
    const rightPair = numberInStringForm.slice(pairLength, lengthOfNumberInStringForm);

    return leftPair === rightPair ? roundedNumber : roundedNumber * 2;
  }
  return roundedNumber * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(7676));
