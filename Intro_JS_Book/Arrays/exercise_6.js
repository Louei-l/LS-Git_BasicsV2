let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let mappedArr = arr.map(item => item.length);
  return mappedArr.filter(item => item % 2 !== 0);
}




console.log(oddLengths(arr)); // => [1, 5, 3]

