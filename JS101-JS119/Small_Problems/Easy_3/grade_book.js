/**
 * Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.
 * 
 * Numerical score letter grade list:

 * 90 <= score <= 100: 'A'
 * 80 <= score < 90: 'B'
 * 70 <= score < 80: 'C'
 * 60 <= score < 70: 'D'
 * 0 <= score < 60: 'F'
 * Tested values are all between 
 */

function getGrade(grade1, grade2, grade3) {
  const avgGrade = (grade1 + grade2 + grade3) / 3;
  return avgGrade >= 90
    ? 'A'
    : avgGrade >= 80
      ? 'B'
      : avgGrade >= 70
        ? 'C'
        : avgGrade >= 60
          ? 'D'
          : 'F'

}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"