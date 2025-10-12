const weatherArr = ['sunny', 'rainy', 'stormy'];
const arrIndex = Math.floor(Math.random() * weatherArr.length);
const weather = weatherArr[arrIndex];

switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'snowy':
    console.log("Don't forget your scarf");
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  case 'stormy':
    console.log("Let's stay inside.");
    break;
  default:
    console.log('Check the weather forecast');
}