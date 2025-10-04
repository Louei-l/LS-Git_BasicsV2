/**
 * MDN page for Date object
 * It says that getYear() method is deprecated and has been replaced by getFullYear().
 * the getYear() does not output full 4 digit year unlike the getFullYear(). It subtracts 1900 from the local time.
 * Thus it has issues with dates greater or equal to 2000. For exaple if year is 2026 the output will be 126.
 * getYear() method only works for dates between 1900 and 1999.
 */

let date = new Date(Date.now());

console.log('example of the deprecated method getYear() is', date.getYear());
console.log('example of the new method getFullYear() is', date.getFullYear());