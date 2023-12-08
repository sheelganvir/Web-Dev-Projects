const course = {
    coursename: "Js in hindi",
    price: "999",
    Instructor: "Hitesh"
}

// One way to console out 
console.log(course.Instructor);

//Another way to console out
const {Instructor} = course
console.log(Instructor);

//Change the key name
const {Instructor: Ins} = course
console.log(Ins);

