let array = [3, 1, 7, 9, 5, 6, 4, 2];
let indexOfFive = -1;
console.log(`before loop ${indexOfFive}`)

for(i = 0; i < array.length; i +=1){
  if(array[i] === 5){
    indexOfFive = i;
    break;
  }
}

console.log(`after the loop ${indexOfFive}`);