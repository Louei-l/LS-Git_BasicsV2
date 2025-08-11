
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};




function copyObj(obj, keys) {
  let newObj = {};
  if(keys === undefined) {
    keys = Object.keys(obj);
  }

  keys.forEach((item) =>{
    if(obj.hasOwnProperty(item)){
    newObj[item] = obj[item];
    }
  })
    return newObj;
 
};


console.log(copyObj(objToCopy));
console.log(copyObj(objToCopy, ['foo']));

// this was by far the most difficult exercise I have done
// after 2 days I had to get a hint (not a sulution) from AI to finally get it done.

