function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("E");
    console.log("L");
}

sayMyName()

function addTwoNumbers(number1,number2){    // Here number1 and number2 are parameters
    console.log(number1+number2);
}
addTwoNumbers(3,4)  //Here input numbers i.e., 3 and 4 are arguments
const result = addTwoNumbers(3,4)
console.log("Result: ", result);

// ALways use the below method not the above one
function add2Numbers(num1, num2){
    // let result = num1+num2
    // return result
    return num1+num2
}
const resultnew = add2Numbers(3,5)
console.log("Resultnew: ", resultnew);



function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Sheel"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
//Above method is not the good one

// Below method is the good one
function loginUserMessageNew(username){
    if(!username){  // if (username === undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessageNew("Sheel Ganvir"));
console.log(loginUserMessageNew(""));
console.log(loginUserMessageNew());

//Default value: If nothing is passed in then function returns the default value
function loginUserMessageNew2(username = "Guest"){
    return `${username} just logged in`
}
console.log(loginUserMessageNew2("Sejal"));
console.log(loginUserMessageNew2(""));
console.log(loginUserMessageNew2());