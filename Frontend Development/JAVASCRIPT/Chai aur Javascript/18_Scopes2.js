/******************* Nested Scopes *************** */
function one(){
    const username = "Sheel"

    function two(){
        const website = "Google"
        console.log(username);
    }
    // console.log(website); --> it will give error 

    two()
}
one()

/****************** INTERESTING **************** */

//Normal functions
console.log(addOne(5));

function addOne(num){
    return num+1
}
console.log(addOne(5));


//Function as expressions
// console.log(addTwo(6)); --> It will give an error we can call this type of functions after the declaration only

const addTwo = function(num){
    return num+2
}
console.log(addTwo(7));