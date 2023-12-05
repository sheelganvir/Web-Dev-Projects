//Singleton
//==============================
//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sheel",
    "full name": "Sheel Ganvir",
    [mySym]: "mykey1",
    age: 20,
    location: "Balaghat",
    email: "sheelg@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
