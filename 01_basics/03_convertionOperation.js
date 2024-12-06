let score = 33;

// console.log(typeof score);//number
// console.log(typeof (score));//number
let isNumber = String(score);
console.log(isNumber); //33
console.log(typeof isNumber); //string

// let mark = "33abc";
//let mark = null //output= 0
//let mark = undefined //NaN
//let mark = true //1
//let mark = false //0
let mark = "bhushan"; // NaN

// console.log(typeof mark);//string
// console.log(typeof (mark));//string

let valueInNumber = Number(mark);
// console.log(typeof (valueInNumber));//number
// console.log(valueInNumber);//NaN..not a number

// let isLoggedIn = 1; // true
//let isLoggedIn = 0; // false
let isLoggedIn = ""; //false
//  let isLoggedIn = "bhushan" //true

//let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

//*******************oprations**************//
let value = 3;
let negValue = -value
console.log(negValue); //-3

let str1 = "Hello"
let str2 = " Bhushan"

let str3 = str1 + str2
console.log(str3);// Hello Bhushan 

//=============== complex situation==============//

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
console.log(true)//true
console.log(+true);//1
console.log(+"");//0

let num1,num2,num3
num1=num2=num3=2+2

console.table([num1,num2,num3]);//for all value is 4

let gameCounter = 100;
// gameCounter++;//101
++gameCounter;//101
console.log(gameCounter)


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion






