const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/* Answer: NAME variable is declared as a constant, meaning we cannot reassign its value later on.
           Hence, only the first three consol.log are printed. 
           When we try to reassign Joe to NAME we get an Assignment type error.

   How to fix it: change NAME variable declaration from const to let.         

*/