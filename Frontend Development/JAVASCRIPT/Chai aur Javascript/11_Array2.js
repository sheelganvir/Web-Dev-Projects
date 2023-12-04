const heros = ["thor","Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//heros.push(dc)

console.log(heros);
// console.log(heros[3][1]);

// const allheros = heros.concat(dc)
// console.log(allheros);

const allNewHeros = [...heros, ...dc]
console.log(allNewHeros);


const another_Array = [1,2,3,[10,11,20],[6,7,[8,9,[15,16]]]]

const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("SHEEL"));
console.log(Array.from("SHEEL"));
console.log(Array.isArray("SHEEL"));

console.log(Array.from({name: "SHEEL"}));   //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));