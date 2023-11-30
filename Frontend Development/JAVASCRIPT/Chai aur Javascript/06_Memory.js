/*********************** MEMORY ********************/ 
/*
    Stack (Primitive) => Copy of original 
    Heap (Non primitive) => Reference to original
*/

//STACK MEMORY EXAMPLE

let myname = "Sheel"
let myRealName = myname
myRealName = "SheelGanvir"

console.log(myname);
console.log(myRealName);

//_____________________________________________________

//HEAP MEMORY EXAMPLE

let userOne = {
    email: "Virat2@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Virat3@gmail.com"
console.log("User One Email : ", userOne.email); // Virat3@gmail.com
console.log("User Two Email : ", userTwo.email); // Virat3@gmail.com