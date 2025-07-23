function foo() {
  if(true) {
    return 'bar';
  }
  else {
    return qux();
  }
}

// learning: was on the right track but foo() should be inside
//           the if(...)
