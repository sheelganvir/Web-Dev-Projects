/************************* COMPARISON OPERATORS **************************/

/*  
    BASICS:

    console.log(2>1) => 1
    console.log(3>=4) => false
    console.log('hello'==='world') => false
    console.log(!true) => false
    console.log(5<=6 && 7>=8) => true
    console.log("2">1) => true
    console.log("02">1) => true
*/

/*
    NULL and undefined Operations

    Note: An equality check == and comparisons ><>=<= works differently
          Comparisons convert null to a number, trearting it as 0

    console.log(null>0) => false
    console.log(null==0) => false
    console.log(null>=0) => true
    console.log(undefined<0) => false
    console.log(null===undefined) => false
    console.log(null!==undefined) => true
    console.log(null!=undefined) => true
    console.log(null == undefined) => true    
*/