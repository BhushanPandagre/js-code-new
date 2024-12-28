const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  ts: "typescript",
};

// forin loop

for (const key in myObject) {
  //   console.log(key) //for key
  // console.log(myObject[key])//for value
  //for both
  // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "cpp", "java", "py", "rb", "ts", "swipt"];

for (const key in programming) {
  //    console.log(key)//indexing print hoti hai array m
  //   console.log(programming[key]);
}

// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United states of America");
// map.set("FR", "France");
// map.set("IN", "India");

// for (const key in map) {
//   console.log(key);
// }
