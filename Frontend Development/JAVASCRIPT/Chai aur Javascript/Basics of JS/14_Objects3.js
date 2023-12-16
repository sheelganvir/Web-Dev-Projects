const course = {
    coursename: "Js in hindi",
    price: "999",
    Instructor: "Hitesh"
}

// One way to console out 
console.log(course.Instructor);


//DESTRUCTURING of object or Another way to console out
const {Instructor} = course
console.log(Instructor);

//Change the key name
const {Instructor: Ins} = course
console.log(Ins);

//We get APIs in the form of object or array

/*API in the form of Object
{
    "name": "Sheel" 
    "coursename": "JS"
    "IsLoggedIn": false
}
*/

/*API in the form of array
[
    {},
    {},
    {},    
]
*/