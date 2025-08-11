let myProtoObj = { foo: 1,  bar: 2 };
console.log(myProtoObj);
let myObj = Object.create(myProtoObj);
 
 
myObj.qux = 3;
console.log(myObj);

//Without running this code, can you determine 
//whether these two snippets produce the same output? Why?

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//for each will log qux key only as this is the only non inherited key

for (let key in myObj) {
  console.log(key);
}

//for..in will log qux, foo and bar keys as it will also
//take into account the inherited keys from prototype object

//got it rigtht ! yay :)