function factorial(num) {
  let ans = 1;
  for(let i = 1; i < num; i += 1) {
  ans = ans * (i + 1);
  }
  console.log(ans);
  return ans;
}

factorial(6);