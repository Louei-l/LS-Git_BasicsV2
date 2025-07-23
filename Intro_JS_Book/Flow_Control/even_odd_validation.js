function evenOrOdd(number) {
  if (typeof number === 'number'){
    if(number % 2 === 0){
      console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
  } else {
    console.log(`${number} is not a number, it is a ${typeof number}`); // added easy reference for user to see the error
  }
}

evenOrOdd(true);