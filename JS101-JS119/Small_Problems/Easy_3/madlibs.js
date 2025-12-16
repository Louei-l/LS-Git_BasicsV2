const readlineSync = require('readline-sync');
const noun =readlineSync.question('Enter a noun: ');
const verb = readlineSync.question('Enter a verb: ');
const adjective = readlineSync.question('Enter an adjective: ');
const adverb = readlineSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`)