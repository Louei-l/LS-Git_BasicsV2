const last = (arr) => {
   if (!Array.isArray(arr)){
    return;
  }
  let lastIndex = arr.length - 1;
  return arr[lastIndex];
}

//verifying function
console.log(last('Earth'));
console.log(last(['Earth', 'Moon', 'Mars']));
console.log(last([]));
