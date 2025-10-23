const extractRegion = (locale) => {
  if (typeof locale !== 'string' || !useRegex(locale)) {
    return 'Please enter correct locale as a string';
  } 
  return locale.split('_')[1].split('.')[0]
}


//helper function
function useRegex(input) {
    let regex = /[A-Za-z][A-Za-z]_[A-Za-z][A-Za-z]\.UTF-\d/;
    return regex.test(input);
}

console.log(extractRegion('en_US.UTF-8'));