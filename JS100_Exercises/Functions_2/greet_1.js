function greet(greeting) {
  if(greeting === undefined){
    greeting = 'Hello'
  }
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();  // logs: Hello, world!