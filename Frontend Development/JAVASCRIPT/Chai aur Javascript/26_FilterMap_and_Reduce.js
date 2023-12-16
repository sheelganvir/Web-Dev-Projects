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

