function greet(input1, input2) {
  if(input1 === undefined){
    input1 = 'Hello'
  }
  if(input2 === undefined){
    input2 = 'world'
  }
  console.log(`${input1}, ${input2}!`);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!