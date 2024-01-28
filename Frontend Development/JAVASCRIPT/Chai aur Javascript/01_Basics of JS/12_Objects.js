//Singleton
//==============================
//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sheel",
    "full name": "Sheel Ganvir",
    [mySym]: "mykey1",  //Way to use symbol as a key of object
    age: 20,
    location: "Balaghat",
    email: "sheelg@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);  // Generally we use this 
console.log(JsUser["email"]);   //best way to print 
console.log(JsUser["full name"]);   
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@gmail.com"   //change key value
Object.freeze(JsUser)   //freeze the email
console.log(JsUser.email);
JsUser.email = "hiteshsheel@gmail.com"
console.log(JsUser);


//*****Functions***** */

JsUser.greeting = function(){
    console.log("Hello JS Users");
}

JsUser.greetingTwo = function (){
    console.log(`Hello Js User, ${this.name}`);     // We use "this" only when we have to refer in the same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());