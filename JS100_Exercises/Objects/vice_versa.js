let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

const newObj = Object.fromEntries(nestedArray);

//verify output
console.log(newObj);