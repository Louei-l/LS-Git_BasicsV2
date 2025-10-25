const localGreeting = {
  en_US: 'Hey!',
  en_GB: 'Hello!',
  en_AU: 'Howdy!',
}

const langGreeting = {
  fr: 'Salut!',
  en: 'Hi!',
  pt: 'Olá!',
  de: 'Hallo!',
  sv: 'Hej!',
  af: 'Haai!',
}




function localGreet(locale){
  const region = extractRegion(locale);
  const language = extractLanguage(locale);

  if (!language) {
   return 'Invalid Locale';
  }

  const lang = language.toLowerCase();
  const reg = region ? region.toUpperCase() : null;

  if (reg) {
    const key = `${lang}_${reg}`;
    return 
  }


  if (localGreeting.hasOwnProperty(key)) {
    return localGreeting[key]
  }

  return greet(lang) ?? 'Hello.';

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
    let regex = /^[A-Za-z]{2}_[A-Za-z]{2}\.UTF-\d+$/;
    return regex.test(input);
}

function extractLanguage(str) {
  return typeof str === 'string' 
  ? str.split("_")[0] 
  : null;
}



function greet(lang) {
  return langGreeting.hasOwnProperty(lang) 
  ? langGreeting[lang]
  : null;
}



