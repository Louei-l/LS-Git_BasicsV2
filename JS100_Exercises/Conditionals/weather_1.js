const weatherArr = ['sunny', 'rainy', 'stormy'];
const arrIndex = Math.floor(Math.random() * weatherArr.length);
const weather = weatherArr[arrIndex];

console.log(`Today's weather is ${weather}.`);

let message;
if (weather === 'sunny') {
  message = "It's a beautiful day!";
} else if (weather === 'rainy') {
  message = "Grab your umbrella.";
} else {
  message = "Let's stay inside.";
}

console.log(message);