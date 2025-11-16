let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(text) {
    console.log(`Hey, ${text}!`);
  }
};

//verify output
jane.greet('Bobby');