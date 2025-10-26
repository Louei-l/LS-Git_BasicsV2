const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // => Jane Doe

//myFunction gives firstname key a new value 'Jane'
//after this is done log command prints the object a