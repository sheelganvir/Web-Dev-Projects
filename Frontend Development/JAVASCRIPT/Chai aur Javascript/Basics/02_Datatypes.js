"use strict"; //treat all js code as newer version

//alert(3+3)    //we are using node.js, not browser

let name = "Sheel"
let age = 20
let isLoggedIn = false

//number => 2 to the power 53
//bigint
//string => " "
//boolean => true or false
//null => null value or standalone value
//undefined => undefined variable
// symobol => unique


//object => {}
//array => []
//function => function(){}

/************************ typeof ************************/

console.log(typeof name);   //string
console.log(typeof null);   //object
/*
    typeof "John"                 // Returns "string"
    typeof 3.14                   // Returns "number"
    typeof NaN                    // Returns "number"
    typeof false                  // Returns "boolean"
    typeof [1,2,3,4]              // Returns "object"
    typeof {name:'John', age:34}  // Returns "object"
    typeof new Date()             // Returns "object"
    typeof function () {}         // Returns "function"
    typeof myCar                  // Returns "undefined" *
    typeof null                   // Returns "object"
*/

/************************* TYPES OF DATATYPES ****************************/

/*
    1. Primitive
        7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

    2. Reference (Non Primitive)
        Array, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);     //false

const bigNumber = 34567897815566558n    //bigInt datatype

/************************ Array, Objects, Functions **************************/

/* 
    Array:
    const cricketers = ["Virat", "Dhoni", "Rahul"];

    Object:
    let myObj = {
        name: "Sheel",
        age: 20,
    }

    Function:
    const myFunction = function(){
        console.log("Hello Sheel")
    }
*/