//for (let i = 0; ; i += 1) {
//  console.log("and on");
//}
// the code is stuck in an infinite loop since there is no verficication mechanism.
// the middle part of for loop is empty.

// here is the fix, that ensures only one iteration.

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}