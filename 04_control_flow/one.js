//control flow
//if

// if(false){
// console.log("Bhushan")
// }else{
//     console.log("something went wrong ")
// }

//>,<,<=,=<,>=,==,===,!=,!==

// if(2==="2"){
//     console.log("Exicuted")
// }else{
//     console.log("Not exicuted")
// }

// const temprature = 43

// if(temprature===43){
// console.log("Temprature less then 50")
// }else{
//  console.log("temprature grater then 50 ")
// }

const score = 200;

// if(score>100){
// const power = "fly";
// console.log(`user power ${power}`)
// }
// console.log(`user pwor ${power}`)//power is not defined

//short hand

// if
const isUserloggedIn = true;
const temperature = 41;

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
