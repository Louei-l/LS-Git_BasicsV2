const compareByLength = (str1, str2) => {
  let str1_length = str1.length;
  let str2_length = str2.length;
  if (str1_length < str2_length) return -1;
  if (str1_length > str2_length) return 1; 
  return 0;
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace')); 