let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor', 'Yuri', 'Kai', 'Mo','Lou'];
let upperNames = [];

for(index = 0; index < names.length; index +=1) {
  if(names[index] === 'Chris') continue;
  if(names[index] === 'Kevin') continue;
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
}

console.log(upperNames);