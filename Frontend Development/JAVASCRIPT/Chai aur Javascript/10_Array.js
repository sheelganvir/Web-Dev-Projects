const myarr = [0,2,3,4,6,"Sheel"]
const myarr2 = new Array(1,2,3,4)
console.log(myarr);
console.log(myarr2);

myarr.push(8)
console.log(myarr);
myarr.pop()
console.log(myarr);

myarr.unshift(9)
console.log(myarr);
myarr.shift()
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(2));

const newArr = myarr.join()     //convert array into string

console.log(myarr);
console.log(newArr);
console.log(typeof newArr);

// slice and splice

console.log("A", myarr);

const mya1 = myarr.slice(1,3)
console.log(mya1);
console.log("B",myarr);

const mya2 = myarr.splice(1,3)
console.log(mya2);
console.log("C", myarr);