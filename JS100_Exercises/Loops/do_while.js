let counter = 0;

while (counter > 0) { //while is control-entry loop, it checks condition before it executes the body.
  console.log('Woooot!'); // condition never meets the requirement 0 is not > 0 so it does not log anything.
  counter -= 1;
}

let counter1 = 0;

do { // do while is a control-exit loop, it will execute the body at least once because it checks the condition at the end before doing seond iteration.
  console.log('Woooot - do!'); // logs once then stops because condition no longer meets the requirement.
  counter1 -= 1;
} while (counter1 > 0);

