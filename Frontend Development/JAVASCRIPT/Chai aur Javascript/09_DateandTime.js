const myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //  IMP
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getDay()); // 0-6 (0=Sunday, ..., 6=Saturday
console.log(myDate.getMonth()); //  0-11 (January...December)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreartedDate2 = new Date("02-12-2023")
console.log(myCreartedDate2.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreartedDate2.getTime());
console.log(Math.floor(Date.now()/1000));


let Date1 = new Date()
console.log(Date1);

Date1.toLocaleString('default', {
    weekday: "long",
})