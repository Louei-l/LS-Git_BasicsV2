/*
  Without running this code, what will it print?


  function show(foo = undefined, bar = null) {
    console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
  } 

  show(5, 7);
  show(0, 0);
  show(4);
  show();

  Observations: 
  --line 1: foo and bar parameters are initialized with default nullish values. 
    Meaning that if no argument is passed during th function call foo and bar will be nullish.
  -- line 2:  We have template literal string that will log the values of foo ?? 3 and bar ?? 42 expressions.
              We can also note that we are dealing with nullish coalcescing operator ??.
              It will short-circuit to return value of left operand if left operand is not nullish, in all other cases
              it will return the value of right hand operand. GOOD RULE OF THUMB in ?? right hand is an insurance when left is null, 
              otherwise left is always taken.

  ANS:
  show(5, 7); 
    function show(foo = 5, bar = 7) {
    console.log(`foo is ${5 ?? 3}, bar is ${7 ?? 42}`); // is left hand nullish ? in both cases no, so we take 5 and 7
    } 
  output --> foo is 5, bar is 7




  show(0, 0);
    function show(foo = 0, bar = 0) {
    console.log(`foo is ${0 ?? 3}, bar is ${0 ?? 42}`); // is left hand nullish ? in both cases no, so we take 0 and 0
    } 
  output --> foo is 0, bar is 0


  show(4);
    function show(foo = 4, bar = null) {
    console.log(`foo is ${4 ?? 3}, bar is ${null ?? 42}`); // is left hand nullish ? first expression is no so we take 4, 
    //  second expression yes so we take 42
    } 
  output --> foo is 4, bar is 42
  
  show();
    function show(foo = undefined, bar = null) {
    console.log(`foo is ${undefined ?? 3}, bar is ${null ?? 42}`); // is left hand nullish ? in both cases yes, so we take 3 and 42 
    //  second expression yes so we take 42
    } 
  output --> foo is 3, bar is 42

  got everything right !! yay :)
*/