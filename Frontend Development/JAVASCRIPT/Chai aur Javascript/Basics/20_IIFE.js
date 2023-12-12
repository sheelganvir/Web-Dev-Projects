// Immediately Invoked Function Expressions IIFE

// To immediately call the function, Wrap the function with paranthesis and make a execution call by ()
// Always end IIFE with a semicolon;
(function chai(){
    //It is a named IIFE because it has name chai
    console.log(`DB CONNECTED`);
})();

// IIFE: Function that executes immediately. Function used to remove global scope pollution.

//IIFE in arrow function
( () => {
    console.log(`DB CONNECTED TWO`);
})();

//Pass argument in the above func
( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('Sheel'); 

