const langGreeting = {
  fr: 'Salut!',
  en: 'Hi!',
  pt: 'Olá!',
  de: 'Hallo!',
  sv: 'Hej!',
  af: 'Haai!',
}


const greet = (lang) => {
  console.log(langGreeting[lang]);
}

greet('af');