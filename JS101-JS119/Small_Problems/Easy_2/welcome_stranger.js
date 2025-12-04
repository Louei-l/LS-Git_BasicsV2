/**
 * Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, 
 * when combined with adjoining spaces, will produce a person's name. 
 * The object will contain two keys, "title" and "occupation", * and the appropriate values. 
 * Your function should return a greeting that uses the person's full name, and mentions the person's title.
 */

function greetings(arr, obj) {
  if (!Array.isArray(arr) || arr.length === 0) return; // if empty and not array retunr.
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return; // check if not object or arr or null, return.
  if (!('title' in obj) || !('occupation' in obj)) return; //checking if a key exists and has a truthy value (not null, undefined, 0, false, "").
  const name = arr.join(' ');
  return `Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`
}

//verify output
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);