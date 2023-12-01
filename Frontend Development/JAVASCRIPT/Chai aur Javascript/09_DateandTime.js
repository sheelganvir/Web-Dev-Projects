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