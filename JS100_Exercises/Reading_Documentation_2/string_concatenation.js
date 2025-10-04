/**
 * Find out how we can join two or more strings together.
 * There are several ways to join strings together
 */

//1. Using the + operator
let string1 = 'HK-47: "Commentary: I say we blast the meatbag ';
let string2 = 'and save you the trouble, Master."';
let combinedSting = string1 + string2;
console.log(combinedSting);

//2. Using template literals ``
let string3 = 'HK-47: Damn it Master!'
let fullstring = `${string3} I am an assassination droid, not a dictionary!`
console.log(fullstring);

//3. using the concat() method
let string4 = 'Hk-47: Recitation: Yes, as I said, I am an assassin droid.'
let string5 = 'It is my primary function to burn holes through meatbags'
let string6 = ' that you wish to be removed from the galaxy ... Master.'
let concatedString = string4.concat(" ", string5, string6);
console.log(concatedString)