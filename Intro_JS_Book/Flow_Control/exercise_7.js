function stringCpas(text) {
  if(!(typeof text === 'string')) {
    console.log(`${text} is not a string, it is a ${typeof text}`);
    return;
  }
  if(text.length > 10) {
    console.log(`${text.toUpperCase()}`)
    return text.toUpperCase;
  } else {
    console.log(`${text}`);
    return text;
  }
  
}

stringCpas('rain');
stringCpas('Pasta is for life!');
stringCpas(100000);