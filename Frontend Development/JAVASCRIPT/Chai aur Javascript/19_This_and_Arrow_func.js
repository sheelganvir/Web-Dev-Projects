// this refers current context

const user = {
    username: "Sheel",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "Sejal"
user.welcomeMessage()

console.log(this);      //{}


function chai(){
    let username = "Sheel"
    console.log(this.username);     //this works only inside the object
}
chai()

//same behaviour with the below function 
const chaiFunc = function(){
    let username = "Sheel"
    console.log(this.username);
}
chaiFunc()

// Aother way to write a function comes from the ES6, remove "function" and write an arrow
// and this function is known as arrow function
const arrowChai = () => {
    let username = "Sheel"
    console.log(this.username);
}
arrowChai()

const addTwo = (num1, num2) => {
    return num1 + num2;     //explicit return
}
console.log(addTwo(5,6));

//Above arrow function can also be return as below
const addTwoArrow = (num1, num2) => (num1 + num2)   // implicit return
//if we make parenthesis after arrrow then we don't need to write return
console.log(addTwoArrow(5,9));

const addTwoArrowObj = (num1, num2) => ({username: "sejal"})
console.log(addTwoArrowObj(5,9));



