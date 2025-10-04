/*let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}
*/ 

// output from above code -> TypeError: tweet.length is not a function
// the rationale is that .length is in fact a property and to use it properly we need to remove the ().
// typeError comes because the system sees that the argument passed to function .length() is not compatible.
// if the above code actually defined a function length then it would work.
// here is corrected code

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}