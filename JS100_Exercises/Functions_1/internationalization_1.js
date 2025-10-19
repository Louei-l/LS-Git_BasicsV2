const langGreeting = {
  fr: 'Salut!',
  en: 'Hi!',
  pt: 'Olá!',
  de: 'Hallo!',
  sv: 'Hej!',
  af: 'Haai!',
}


const greet = (lang) => {
  return langGreeting[lang];
}

console.log(greet('af'));