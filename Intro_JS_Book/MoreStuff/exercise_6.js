let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(input, regex) {
  let outputArr = []
  for (let string of input) {
    if(regex.test(string) === true) {
      outputArr.push((string.match(regex)).input)
    }
  }
  return outputArr;
}

console.log(allMatches(words, /lab/));