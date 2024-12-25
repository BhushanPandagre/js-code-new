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

function addTwoNumbers(a,b){
  return a+b;
}
const result = addTwoNumbers(33,2);
console.log(result)
// console.log(addTwoNumbers(10,3));

// function logginUserMessege(username){
//     if(logginUserMessege===undefined){
//  console.log("please Enter a User Name")
//  return;
//     }
//     return `${username} just Logged In`
// }


function logginUserMessege(username="sam"){
    if(!username){
 console.log("please Enter a User Name")
 return;
    }
    return `${username} just Logged In`
}

console.log(logginUserMessege("bhushan"));


// console.log(logginUserMessege("Bhushan"))
//Bhushan just Logged In
console.log(addTwoNumbers(""))//undefined