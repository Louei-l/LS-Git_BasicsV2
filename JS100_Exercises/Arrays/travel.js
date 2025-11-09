const destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  const contains = (destination) => {
    for (city in destinations){
      if (destination == destinations[city]){
       return true;
      }
    } 
        return false;
  }

//verify output
console.log(contains('Prague'));
console.log(contains('Nashville'));

