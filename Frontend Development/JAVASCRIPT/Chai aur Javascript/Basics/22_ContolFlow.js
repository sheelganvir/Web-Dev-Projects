// if

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log(`Sheel logged in`);
}
else{
    console.log(`Sheel not logged in`);
}


// **********SWITCH CASE**********

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Default case matched");
        break;
}