function triangle (num) {
  const STAR = '*';
  const PADDING = ' ';
  let output;
  for (let i = 1; i <= num; i += 1) {
    output = PADDING.repeat(num-i) + STAR.repeat(i);
    console.log(output);
  }
}

triangle(5); 