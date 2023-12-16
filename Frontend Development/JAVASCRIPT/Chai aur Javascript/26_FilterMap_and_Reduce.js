const coding = ["js","ruby","java","python"]

/*
 const values = coding.forEach((item)=>{
    console.log(item)
 })

 console.log(values);

 for each loop does't return anything so below operation is not operational
 */


 //filter function
 const myNums = [1,2,3,4,5,6,7,8,9,10]
 const newNums = myNums.filter( (num) => num > 4)
 console.log(newNums);

 const Nums = myNums.filter( (num) => {
    return num>4
 })
 console.log(Nums);
//Either write without scope or if you want to use scope then use return

 //perform the above thing with foreach loop without filter
 const newNums2 = []
 myNums.forEach( (num) => {
    if (num>4) {
        newNums2.push(num)
    }
 })
 console.log(newNums2);

 const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
 ];

 let userBooks = books.filter( (bk) => bk.genre === 'History')
 console.log(userBooks);
 userBooks = books.filter( (bk) => {return bk.publish >= 2000})
 console.log(userBooks);
 userBooks = books.filter( (bk) => {
   return bk.publish >= 1995 && bk.genre === 'History'
})
 console.log(userBooks);

 /************************************************************************************* */

 const myNumbers = [1,2,3,4,5,6,7,8,9,10]

 let newNumbers = myNumbers.map( (num) => num+10)
 console.log(newNumbers);

 //same thing with scope and return
 newNumbers = myNumbers.map( (num) => {return num+10})
 console.log(newNumbers);

 const newNumbers2 = myNumbers
   .map((num) => num*10)
   .map((num) => num+1)
   .filter((num) => num>= 40)
console.log(newNumbers2);

/************************Reduce in array***************** */
// Here we have accumulator and cuurentvalue

const arr = [1, 2, 3, 4];
const myTotal = arr.reduce( function(acc, currval){
   console.log(`acc: ${acc} and currval: ${currval}`);
   return acc+currval   //return value will becomes the next accumulator
},0)     // initial val of accumulator(acc) is set to 0
console.log(myTotal);

