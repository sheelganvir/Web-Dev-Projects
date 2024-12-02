/*********************** MEMORY ********************/ 
/*
    Stack (Primitive) => Copy of original 
    Heap (Non primitive) => Reference to original
*/

//STACK MEMORY EXAMPLE

let myname = "Sheel"
let myRealName = myname    //It's important to note that since strings are primitive values in JavaScript, this assignment creates a copy of the string, not a reference to the same memory location.

myRealName = "SheelGanvir"

console.log(myname);       // "Sheel"
console.log(myRealName);   // "SheelGanvir"

//_____________________________________________________

//HEAP MEMORY EXAMPLE

let userOne = {
    email: "Virat2@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne    //Unlike primitive types (which are copied by value), objects in JavaScript are assigned by reference. 
                        // This means that both userOne and userTwo are referring to the same object.
userTwo.email = "Virat3@gmail.com"
console.log("User One Email : ", userOne.email); // Virat3@gmail.com
console.log("User Two Email : ", userTwo.email); // Virat3@gmail.com
