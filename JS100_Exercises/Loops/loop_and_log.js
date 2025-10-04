for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//expected logs are 2, 4, 6, 8, 10
// missed the 0, I thought it will not be logged.
// now I understand that the third portion of for loop is executed after the currect run.