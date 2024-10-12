/**
 * Write a function capitalizeFirstLetter(str) that takes a string and
 * returns the string with the first letter of each word capitalized.

Requirements:
1. The words in the string are separated by spaces.
2. The string does not contain special characters or numbers.
*/
let fullName = 'huynh yen chi';
let arr = fullName.split(' ');

console.log(arr.map(e => {
  return e.charAt(0).toUpperCase() + e.slice(1)
}).join(' '))
