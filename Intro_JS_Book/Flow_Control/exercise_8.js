function intRange(int) {
  if(int >= 0 && int <= 50) {
    console.log(`${int} is between 0 and 50`);
  } else if(int >= 51 && int <= 100) {
      console.log(`${int} is between 51 and 100`);
  } else if(int > 100 ) {
      console.log(`${int} greater than 100`);
  } else {
      console.log(`${int} less than 0`);
  }
}