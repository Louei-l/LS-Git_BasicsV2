const localGreeting = {
  fr_FR: 'Salut!',
  fr_CA: 'Salut!',
  fr_MA: 'Salut!',
  en_US: 'Hey!',
  en_GB: 'Hello!',
  en_AU: 'Howdy!',
}




function localGreet(locale){
  const region = extractRegion(locale);
  const language = extractLanguage(locale);
  const langRegion = String(language + '_' + region);

  return greet(langRegion);

}


console.log(localGreet('en_GB.UTF-8'));




//helper functions
function extractRegion(locale)  {
  if (typeof locale !== 'string' || !isValidLocale(locale)) {
    return null;
  } 
  return locale.split('_')[1].split('.')[0];
}

function isValidLocale(input) {
    let regex = /[A-Za-z]{2}_[A-Za-z]{2}.UTF-\d+$/;
    return regex.test(input);
}

function extractLanguage(str) {
  return typeof str === 'string' ? str.split("_")[0] : 'enter a string please';
}



function greet(lang) {
  return localGreeting[lang];
}



