/********************* for of loop ****************** */

const arr = [10,20,30,40,50]
for (let i of arr) {
    console.log(i); 
}

const greetings = "Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

/************* Maps ***************** */

const map = new Map()
map.set("Name", "John Doe")
map.set("Age","30")
//map.set("Name", "John Doe")   map print only unique set of values
console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Note: for of loop doesn't work for object

/****************** for in loop *******************/

//for in loop in object
const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb : 'ruby'
}
for(const key in myObj) {
    console.log(key);
}
for(const key in myObj) {
    console.log(myObj[key]);
}
for(const key in myObj) {
    console.log(key + " :- " + myObj[key]);
}

//for in loop in array
const cricketer = ["Virat","dhoni","maxi"] 
for (const key in cricketer) {
    console.log(key);   //it prints keys not values but for of loop prints values directly
}
for (const key in cricketer) {
    console.log(cricketer[key]);   
}

//Note: for in loop doesn't work for maps

/*********************** for each loop ********************* */

const coding = ["js","ruby","java","python"]

coding.forEach(function (item) {
    console.log(item);
})
coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

/*****************Objects inside an array*************  */

const myCoding= [
    {
        languageName: "javascript",
        filename: "js"
    },
    {
        languageName: "java",
        filename: "java"
    },
    {
        languageName: "python",
        filename: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
})

