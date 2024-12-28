// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
  console.log(`Each char is :${greet}`);
}

//maps

const map = new Map();

map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
map.set("IN", "India");
//map unique values ke liye jana jata hai aur isme order bhi same rahta hia maintain rahta hia ..!!

// console.log(map);

for (const key of map) {
  //   console.log(key);
}

//how to print key and value

for (const [key, value] of map) {
//   console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

//its not working for objects 


