/*
    FALSY VALUES:  false, 0, -0, bigInt On, "", null, undefined, NaN

    Rest of the values are Truthy values

    Also "0", 'false', " ", {}, function(){} --> TRUTHY VALUES
*/

const username = ""
if (username) {
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

const username2 = []
if (username2) {
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*********** Interesting ************ 
    false == 0    --> true
    false == ''   --> true
    0 == ''       --> true

*/

/************** NUllish Coalescing Operator (??): null undefined */

let val1;
// val1 = 5 ?? 10           -->     5
// val1 = null ?? 20        -->     10  
// val1 = undefined ?? 25   -->     15
val1 = null ?? 30 ?? 50     // first value

console.log(val1);

/*************** Terniary Opearator *************
    condition ? true : false
 */

    const iceTeaPrice = 100
    iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");;