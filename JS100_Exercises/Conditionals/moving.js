let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// isMoving = 19 < 24 && (0 > 0 || 24 > 0)
// 19 < 24 --> True
// (0 > 0 || 24 > 0) --> True
// True && True --> True
// isMoving = True