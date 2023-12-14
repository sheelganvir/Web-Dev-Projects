let score = "33"    //it is string because it is inside " "
let age = "35abc"

console.log(typeof score);
console.log(typeof (score));

// Converting score string into number format and store the value inside valueInNumber

let valueInNumber = Number(score)
let valueAgeInNumber = Number(age)   

console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(typeof valueAgeInNumber);
console.log(valueAgeInNumber);  //Not a number (NaN) since 33abc is not a number

/*
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0
    null => 0
    undefined => NaN
*/

/* -------------------------------------------------------------------------------------------------------------------------------- */

// Convert Number to Boolean using 

let choice = 1
let myname = "Sheel"

let booleanChoice = Boolean(choice)
let booleanMyname = Boolean(myname)

console.log(booleanChoice);
console.log(booleanMyname);

/* 
    1 => true; 0 => false
    " " => false
    "Sheel" => true
*/

/* -------------------------------------------------------------------------------------------------------------------------------- */

// Converting Number into string

let someNumber  = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);