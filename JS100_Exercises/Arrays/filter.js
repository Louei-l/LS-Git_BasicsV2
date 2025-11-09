const scores = [96, 47, 113, 89, 100, 102];
//Count the number of elements in scores that are 100 or above.

const countScores = (scores.filter((x) => x >= 100)).length;

//verify solution
console.log(countScores);
