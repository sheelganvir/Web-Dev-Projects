const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherName = 123.896
console.log(otherName.toPrecision(4));

const hundresds = 1000000
console.log(hundresds.toLocaleString('en-IN'));

/*********************************** MATHS *******************************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(1,4,6,3));
console.log(Math.max(4,9,10,5,2,6));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Maths.floor(Math.random()*10)+1);

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);