let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newMyArray = myArray.map((num) => {
  if(num % 2 === 0) return "even";
  if(num % 2 !== 0) return "odd";
});

console.log(newMyArray);