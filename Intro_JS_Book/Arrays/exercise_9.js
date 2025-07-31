let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForThree(arr) {
  let arrCheck = arr.filter((item) => item === 3);
  if(arrCheck.reduce((acc, item) => acc + item, 0) === 3) return true;
  return false;
}


console.log(checkForThree(numbers3));

//happy to have solved it 100% on my own