let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((acc, item) => {
    if(item.length % 2 !== 0) {
      acc = acc.concat(item.length);
    }; return acc;
  },[]); 
}  

console.log(oddLengths(arr)); // => [1, 5, 3] 

// very happy to have managed to tackle this problem. 
// i did use hint and also brainstormed with LSbot.
// final solution, logic and flow came from me, I had help nwith syntax from LSbot.