//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "12345"
tinderUser.name = "Sheel"
tinderUser.IsLoggedIn = false

console.log(tinderUser);


//****** Nested objects ****** */

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Sheel",
            lastName: "Ganvir"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);

// We will use the below syntax to merge the objects in 90% cases

const obj5 = {...obj1, ...obj2}
console.log(obj5);

//  Data from database usually comes in the form of array of objects in the below format

const user1 = [
    {
        id: 1 ,
        email: "sheel@gmail.com"
    },
    {
        id: 2 ,
        email: "sheel2@gmail.com"
    },
    {
        id: 3 ,
        email: "sheel3@gmail.com"
    }
]

console.log(user1[1].email);
 
console.log(tinderUser);    // Display the object

console.log(Object.keys(tinderUser));  // Display out all the keys of the object tindderuser
console.log(Object.values(tinderUser));   //display out all the values of the object the tinderuser
console.log(Object.entries(tinderUser));    //Display out all the entries in the form of all individual arrays

//Check whether has the object has a particular value or not
console.log(tinderUser.hasOwnProperty('IsLoggedIn'));
