//functions

function sayMyName() {
  console.log("B");
  console.log("H");
  console.log("H");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("N");
}
// sayMyName();
//sayMyName=refrence
//()=exicution

function addTwoNumbers(a, b) {
  return a + b;
}
const result = addTwoNumbers(33, 2);
console.log(result);
// console.log(addTwoNumbers(10,3));

// function logginUserMessege(username){
//     if(logginUserMessege===undefined){
//  console.log("please Enter a User Name")
//  return;
//     }
//     return `${username} just Logged In`
// }

function logginUserMessege(username = "sam") {
  if (!username) {
    console.log("please Enter a User Name");
    return;
  }
  return `${username} just Logged In`;
}

console.log(logginUserMessege("bhushan"));

// console.log(logginUserMessege("Bhushan"))
//Bhushan just Logged In
console.log(addTwoNumbers("")); //undefined

//new use csase rest operator
//[ 100, 200, 300, 300, 400 ] return a array
function calculatePrice(...item1) {
  return item1;
}
console.log(calculatePrice(100, 200, 300, 300, 400));

//========================
const user = {
  userName: "Bhushan",
  age: 24,
  price: 999,
};

function handleObject(anyObject) {
  console.log(
    `user Name is ${anyObject.userName} and user age is ${anyObject.age} and item price is ${anyObject.price}`
  );
}
// handleObject(user);
handleObject({
  userName: "Bharti",
  age: 23,
  price: 500,
});

//============================

const myNewArray = [200, 300, 400];

function returnSecondvalue(getArray) {
  return getArray[2];
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 300, 600]));
