// {} this is known as scope

/* if let and const is defined inside any scope then it can't be operate outside the scope
   But if var is defined inside any scope then it can be operate outside the scope
*/

let a = 900
var c = 450
d = 500

//Global scope is the scope that declares outside it will be discussed later
//Below if statement is an example of block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
    d = 40
    console.log("Inner: ", a);
}
console.log(a);  
// console.log(b);
console.log(c);     //Priority is given to block scope
console.log(d);     //Priority is given to block scope

