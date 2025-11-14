function catAge (humanAge){
  if(humanAge < 0) return 'age must be at least 0 years old';
  if(humanAge === 0) return 0;
  if(humanAge === 1) return 15;
  if(humanAge === 2) return 24;
  return 24 + (humanAge - 2) * 4;
}

//Verifying output
console.log(catAge(-1));
console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
console.log(catAge(5));