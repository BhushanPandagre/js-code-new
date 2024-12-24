//Dates 

const myDate = new Date()

console.log(myDate)
//2024-12-24T10:49:08.376Z
console.log(myDate.toString())
//Tue Dec 24 2024 10:51:08 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Dec 24 2024
console.log(myDate.toLocaleString());//12/24/2024, 10:54:39 AM

console.log(typeof myDate)//object 


let myCreatedDate = new Date(2024 , 1 ,23);
//month 0 se start hote hai ...0..yani january
console.log(myCreatedDate.toLocaleString());
//2/23/2024, 12:00:00 AM

// let createdDateByme = new Date(2024,11,11,5,3);
//console output is //Wed Dec 11 2024
// let createdDateByme = new Date('2024-01-11');//yy/mm/dd
//1/11/2024, 12:00:00 AM

let createdDateByme = new Date('2024-01-11');//dd/mm/yy
console.log(createdDateByme.toLocaleString());
// 1/11/2024, 12:00:00 AM

//================================
let myTimeStamp = Date.now();
//1735038920201
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
1708646400000

console.log(Math.floor(Date.now()/1000))
//convert in seconds 
//1735039328

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate())//24
console.log(newDate.getDay())//2
console.log(newDate.getMonth()+1);//12
console.log(newDate.getFullYear())//2024

newDate.toLocaleString('default',{
    weekday:"long"
})


