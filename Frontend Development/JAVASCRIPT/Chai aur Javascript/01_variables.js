const accountId = 28869    //Not allowed to modify the value
let accountEmail = "sheelg@gmail.com"
var accountPassword = "56980"
accountCity = "Jaipuir"  //Bad practice
let accountState;

accountEmail = "hitesh@gmail.com"
accountPassword = "56666"
accountCity = "Agartala"

console.log(accountId);

/*
    Prefer not to use var. You can use let 
    Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])