//Arrays
const myArray = [0,1,2,3,4,"Bhushan",6]
// console.log(myArray[5])

const myHeros = ["saktiman","naagraj","goga","beboo"]
// console.log(myHeros[0])//saktiman

const myArr2 = new Array(1,3,4,6,8,0)
// console.log(myArr2)//[ 1, 3, 4, 6, 8, 0 ]
// console.log(typeof myArr2)//object
// console.log(myArr2[3])//6

//Array Methods 

// myArray.push("Bhushan")//add element to end of the array 

// myArray.push("bharti")
// console.log(myArray)
// myArray.pop()//remove last element from the array 
// console.log(myArray)

myArray.unshift("BigBoss")//add value in starting of the array 

// console.log(myArray)
myArray.shift()//remove value from starting from array 
// console.log(myArray)

// console.log(myArray.includes('Bhushan'));//true
// console.log(myArray.includes(7));//false
// console.log(myArray.indexOf(5))//agr value string m hai too uski value nhi batata hai 

// const newArr = myArray.join();
// console.log(myArray)
// console.log(typeof myArray)//object
// console.log(newArr)
// console.log(typeof newArr)//string


console.log("A",myArray)
const myn1 = myArray.slice(1,4)//last value add nhi hoti 
console.log(myn1)

console.log("B",myArray)
const myn2 = myArray.splice(1,5)//last value bhi add ho jati hai 
//original array m bhi changes hote hai ..!!
console.log(myn2)//[ 1, 2, 3, 4, 'Bhushan' ]
console.log(myArray)//[ 0, 6 ]
