const score = 400 ;
// console.log(score);//400
const blance = new Number(100);
// console.log(blance);//[Number: 100]
// console.log(blance.toString());//100
// console.log(typeof blance);//object 
// console.log(typeof blance.toString());//string
// console.log(blance.toString().length);//3
// console.log(blance.toFixed(2));//100.00


const otherNumber = 123.5500

// console.log(otherNumber.toPrecision(3))//124

const hundreds = 1000000

// console.log(hundreds.toLocaleString())//1,000,000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//++++++++++++++++maths++++++++++++++++//

console.log(Math);//Object [Math] {}
// console.log(Math.abs(-5))//5
// console.log(Math.round(4.4))//4
// console.log(Math.round(4.5))//5
// console.log(Math.ceil(4.2))//5 it takes upper value always
// console.log(Math.floor(4.9))//4 it takes lower value always 

// console.log(Math.min(2,4,5,6,9,1))//1
// console.log(Math.max(2,4,5,6,9,1))//9

console.log(Math.random());//it gives random number in b/w 0 to 1 

console.log((Math.random()*10)+1)//7.030195300981919 LIKE THIS 
console.log((Math.random()*10)+100)//107.1338558572257 LIKE THIS 
console.log(Math.floor(Math.random()*10)+1)//3 like this 


const min = 10 
const max = 20 

console.log(Math.floor(Math.random()* (max-min +1))+min)