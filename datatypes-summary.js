//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

 const bigNumber = 3456543576654356754n
 console.log(typeof bigNumber);//bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "bhushan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++Memory++++++++++++++++++++++++++++//

//1=[stack] (primitive data types ke sath )
//stack==yha hmme ek copy milta hai 
//2=[Heap] (non-primitive data types ke sath)
//Heap==yha hmme ek reference milta hai 

//=========for stack====================//
let myYoutubeName="osmfood"

let anotherName = myYoutubeName;
anotherName="chaiaurbhushan";
console.log(anotherName);//chaiqurbhushan
console.log(myYoutubeName)//osmfood
//============for Heap===============//
let userOne={
    email:"bac@gmail.com",
    upi:"bhushan@ybl"
}
console.log(userOne);

let userTwo=userOne
userTwo.email="bhushan@gmail.com"

console.log(userOne.email);//bhushan@gmail.com
console.log(userTwo.email);//bhushan@gmail.com


