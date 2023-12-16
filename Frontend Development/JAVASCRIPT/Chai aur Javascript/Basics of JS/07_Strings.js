const name = "Sheel"
const repoCount = 50
// console.log(name + repoCount + " Value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sheel-gan')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7,5)
console.log(anotherString);

const newStringOne = "  Sheel   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('sunDAR'));

console.log(gameName.split('-'));