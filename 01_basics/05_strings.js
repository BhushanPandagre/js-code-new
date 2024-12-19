const name = "Bhushan pandagre ";
const repoCount=70

//console.log(name + repoCount + " value ");//old one 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//new one 


//how to define string in new way 
// const gameName = new String('pubg')
const gameName = new String('bhushan_shruti_bharti')

// console.log(gameName);

//output like this ....[String: 'pubg']
// console.log(typeof gameName);//object 
// console.log(gameName[0]); //p
// console.log(gameName.__proto__)//{}
// console.log(gameName.length);//4
// console.log(gameName.toUpperCase());//PUBG
// console.log(gameName.charAt(2));//b..according to index 
// console.log(gameName.indexOf('u'));//1
//===========================================//
// for sub string 
// not include the end number 
const newString = gameName.substring(0,2);
// console.log(newString);
// intresting thing is that u can give the negative value also 
// const anotherString = gameName.slice(-7,5);
const anotherString = gameName.slice(0,5);
console.log(anotherString);
//trim();
const newStringOne = '    bharti  ';
console.log(newStringOne);
console.log(newStringOne.trim());
//replace();
const url = "https://bhushan.com/bhushan%20pandagre";
console.log(url.replace('%20','_'));
//includes pta karne ke liye ki url m ye chij hai ki nhi 
console.log(url.includes("bhushan"));//true
console.log(url.includes('shruti'));//false

//convert to array based on _..using split method

console.log(gameName.split("_"));
//output [ 'bhushan', 'shruti', 'bharti' ]

//=================================================//
const game = new String('foot ball')
// console.log(game);
//output like this ....[String: 'foot ball']
// console.log(typeof game) //object
// console.log(game[1]);//o
// console.log(game.__proto__);//{}
// console.log(game.length);//9
// console.log(game.toUpperCase());//FOOT BALL
// console.log(game.charAt(3));//t according to index
// console.log(game.indexOf('b'));//5
 







