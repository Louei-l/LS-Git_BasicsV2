let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let newObjUpper = objKeys.map((item) => {
  return item.toUpperCase();
})
console.log(newObjUpper);
console.log(obj);