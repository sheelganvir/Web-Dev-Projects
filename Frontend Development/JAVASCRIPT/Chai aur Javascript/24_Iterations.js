/********** for loop **********/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }  
    console.log(`Value of i is ${index}`);  
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }  
    console.log(`Value of i is ${index}`);  
}

/************* while loop ************** */
let index = 0;
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index+2
}

/************** do while loop *********** */
let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);

let scoreNew = 11
do {
    console.log(`Score = ${scoreNew}`);
    scoreNew++
} while (scoreNew<=10);