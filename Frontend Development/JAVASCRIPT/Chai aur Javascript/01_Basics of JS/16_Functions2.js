// ... is known as rest operator or spread operator

//If number of arguments is more than bumber of parameters

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));
//Above one is bad practice

//below one is good practice
function calculateCartPrice2(...num){
    return num
}
console.log(calculateCartPrice2(200,400,500));

//Another approach
function calculateCartPrice3(val1, val2, ...num){
    return num
}
console.log(calculateCartPrice3(200,400,500,700));

/************************ Functions with object ************************ */

const user = {
    username: "Sheel",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

        //Directly pass the object
function handleObject2(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject2({
    username: "Sejal", 
    price: 299
})

/************************ Functions with Arrays ************************ */

const myNewArray = [200,400,500]
function handleArray(anyArray){
    return anyArray[1]
}
console.log(handleArray(myNewArray));

        //Directly pass the array
function handleArray2(anyArray){
    return anyArray[1]
}
console.log(handleArray2([1000,200,500]));
        