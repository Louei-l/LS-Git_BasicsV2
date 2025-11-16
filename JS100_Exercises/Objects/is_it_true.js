//explain why "It's true!" is never output.
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// in the for/in loop we iterate over the keys and do a === check whether the key's value is === ture.
// no key has value of true. 

/* got this wrong

In a for…in loop, prop is the property name, and property names are always strings. So prop === true compares a string to the boolean true, which is never equal.
In your object literal, the unquoted true becomes the string 'true'. JavaScript converts property names to strings, so the key is 'true', not the boolean true.

*/