const extractRegion = (locale) => {
  if (typeof locale !== 'string' || !isValidLocale(locale)) {
    return null;
  } 
  return locale.split('_')[1].split('.')[0];
}


//helper function
function isValidLocale(input) {
    let regex = /[A-Za-z]{2}_[A-Za-z]{2}.UTF-\d+$/;
    return regex.test(input);
}

console.log(extractRegion('en_US.UTF-8'));

