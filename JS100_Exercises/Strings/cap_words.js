/* 
Write code that capitalizes the words in the string 'launch school tech & talk', 
so that you get the string 'Launch School Tech & Talk'.
*/

const str = 'launch school tech & talk'
const strArr = str.split(' ');
let strArrNew = [];
for (let index = 0; index < strArr.length; index += 1) {
  let capWord = strArr[index].charAt(0).toUpperCase() +  strArr[index].slice(1)
  strArrNew.push(capWord);
}
let output = strArrNew.join(' ');
console.log(output);