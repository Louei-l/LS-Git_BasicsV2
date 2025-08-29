let list = [1, 6, 3, 2, -1, -6, -3, -2, 2, 2]
let maxValue = list[0]
for (let i = 1; i < list.length; i += 1) {
  if(maxValue < list[i]){
    maxValue = list[i]
  }  
}

console.log(maxValue);
  