// ******************* OPERATIONS ********************

let value  = 3
let negValue = -value
console.log(negValue)

console.log(2**3)   //2 raised to the power 3

// ************** ARITHMETIC OPERATORS ON STRINGS ******************

let str1 = "Hello"
let str2 = " Sheel"
let str3 = str1+ str2
console.log(str3)   //Hello Sheel

console.log("1"+"2");   //12
console.log(1+"2");     //12 -> JavaScript converts the number to a string and performs string concatenation.
console.log("1"+2+2);   //122 -> JavaScript converts the second operand (2) to a string and performs string concatenation, resulting in "12".
                                //Then, it concatenates "12" with the third operand (2), producing "122".
console.log(1+2+"2");   //32 -> The first two operands are numbers (1 and 2).
                                  // JavaScript performs numeric addition, resulting in 3.
                                  // Then, it encounters a string ("2") and converts 3 to a string to perform string concatenation.
console.log(3+4*5%3);   //5 -> operator precedence: * > % > +

// ************** TRICKY OPERATIONS ******************

console.log(+true);     //1 -> the unary + operator attempts to convert its operand into a number.
console.log(+"");       //0 -> The unary + operator converts the empty string to the number 0.
