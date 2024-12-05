const accountId = 123456
let accountEmail ="bhushan@gmail.com"
var accountPassword = "bhp2upe@123"

let accountState ;

accountCity = "Bhopal"

// accountId = 2 // not allowed 

console.log(accountId);

accountEmail = "bp@gmail.com"
console.log(accountEmail);
accountPassword ="boss@123"
console.log(accountPassword);
accountCity = "jaipur"
console.log(accountCity);

//new one insted of console.log 
console.table([accountEmail , accountId ,accountPassword ,accountCity,accountState])

/*
prefer not to use var 

because of issue in  block  scope and functional scope

*/


