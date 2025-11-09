const vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for(let outerIndex = 0; outerIndex < vocabulary.length; outerIndex += 1){ 
  for(let innerIndex = 0; innerIndex < vocabulary[outerIndex].length; innerIndex += 1){
    console.log(vocabulary[outerIndex][innerIndex]);
  }
}

