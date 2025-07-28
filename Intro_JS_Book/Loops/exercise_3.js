let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// infinite loop because the variable counter is always
// reset to 1 when it cycles for another iteration.
// so it will be always true. Thus loop will never stop
// because there is no condition to end it.
// also line 7 condition never gets to be true because counter
// is always equal to 2.