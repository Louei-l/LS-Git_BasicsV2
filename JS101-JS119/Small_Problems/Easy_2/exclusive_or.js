function xor(arg1, arg2) {
  const bool1 = !!arg1; //enforcing argument 1 into boolean
  const bool2 = !!arg2; //enforcing argument 2 into boolean
  if ((bool1 === true && bool2 === true) || (bool1 !== true && bool2 !== true)) return false;
  return true;
}

//verify output:
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true