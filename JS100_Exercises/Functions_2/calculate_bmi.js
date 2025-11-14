function calculateBMI (heightInCm, weightInKg) {
  if(typeof heightInCm !== 'number' && typeof weightInKg !== 'number') return;
  if(heightInCm <= 0 && weightInKg <=0) return;
  const heightInM = heightInCm / 100;
  const bmi = weightInKg / (heightInM**2);
  return bmi.toFixed(2);
}

//verify output
console.log(calculateBMI(174, 69));
console.log(typeof calculateBMI(174, 69));