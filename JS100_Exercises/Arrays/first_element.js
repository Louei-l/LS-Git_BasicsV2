const first = (arr) => {
  if (!arr || !Array.isArray(arr)){
    return null;
  }
  return arr[0];
}

//verifying function
console.log(first('Earth'));
console.log(first(['Earth', 'Moon', 'Mars']));
console.log(first([]));