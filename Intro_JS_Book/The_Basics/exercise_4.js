/*
Explain why this code logs '510' instead of 15.
console.log('5' + 10);

Answer: There is an implicit coercion of number 10 from being a number to a string. 
        It happens because the engine sees first the '5'
        which is a string thus the rest of the argument is processed as sting, 
        the + sign is then taken as concatenation and 10 is converted to srting to be 
        concatenated.

*/
