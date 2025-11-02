function repeat (num, str) {
  if (typeof num !== 'number' || typeof str !== 'string'){
    console.log('invalid input');
    return;
  }
  let result = ''
  for(let i = 0; i < num; i += 1){
    result = str.concat('', result);
  }
  return result;
}

console.log(repeat(4, 'ha'));