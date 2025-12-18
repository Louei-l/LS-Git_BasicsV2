function century(year) {
  const century = Math.ceil(year / 100);
  const lastNumber = century % 10;
  const lastTwoNumbers = century % 100;
  const ending = { 1: 'st', 2: 'nd', 3: 'rd' };

  // below code determines the suffix
  let suffix;
  //first we handle the special cases of 11, 12, 13 (thank you English)
  if (lastTwoNumbers >= 11 && lastTwoNumbers <= 13) {
    suffix = 'th';
  }
  // then we handle the less special endings
  else if (ending[lastNumber]) {// check if truthy
    suffix = ending[lastNumber];
  }

  //if no spcial case/rule then we default to 'th'
  else { 
    suffix = 'th';
  }

  return century.toString() + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"