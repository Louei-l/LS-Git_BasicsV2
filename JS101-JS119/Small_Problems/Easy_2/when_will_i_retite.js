/**
 * Build a program that logs when the user will retire and how many more years the user has to work until retirement.
 */

const readlineSync = require('readline-sync');

const retirement = () => {
  const currentAge = parseFloat(readlineSync.question('What is your age? '));
  const retirementAge = parseFloat(readlineSync.question('At what age would you like to retire? '));
  if (Number.isNaN(currentAge) || Number.isNaN(retirementAge)) {
    console.log('please enter valid numbers.');
    return;
  }
  if (retirementAge <= currentAge) {
    console.log('You can already retire :)');
    return;
  }
  const currentYear = new Date().getFullYear();
  const remainingWorkYears = retirementAge - currentAge;
  const retirementYear = currentYear + remainingWorkYears;
  console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
  remainingWorkYears === 1  
    ? console.log(`You only have ${remainingWorkYears} year of work to go!`)
    : console.log(`You only have ${remainingWorkYears} years of work to go!`);
  return retirementYear;
}

retirement();  