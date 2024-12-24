// singleton
// Object.create
// constructor se hamesa singleton object banta hia ...!!
//aur litlers se singleton object nhi banta hia normal object banta hia ..!!

// object literals

const jsUser = {
  name: "bhushan",
  age: 24,
  position: "Mern Developer ",
}; //object
console.log(jsUser);
console.log(jsUser.name);

let mySym = Symbol("key1");
let mySym1 = Symbol("key1");
const newUser = {
  name: "Bhushan Pandagre ",
  age: 34,
  [mySym]: "key1",
  [mySym1]: "key1",
  position: "Manager",
  location: "Indore",
  email: "bhushan@gmail.com",
  IsloggedIn: false,
  lastloginDays: ["Monday", "Suterday"],
};
console.log(newUser);
console.log(newUser.age);
console.log(newUser["email"]);
// one another way to accesss object values
console.log(newUser[mySym]);
console.log(newUser[mySym1]);

//how to change object values
const newEmail = (newUser.email = "pandagrebhushan3@gmail.com");
console.log(newEmail);

console.log(newUser);
//how to freeze object

// Object.freeze(newUser);
newUser.email = "g@gmail.com";
console.log(newUser); // no response because of freezing

//how to add functions on object

newUser.greetings = function () {
  console.log("Hello js Users ");
};
newUser.greetingTwo = function () {
  console.log(`Hello ${this.name}`);
};

console.log(newUser);
console.log(newUser.greetings); //[Function (anonymous)]
console.log(newUser.greetings()); //Hello js Users
console.log(newUser.greetingTwo()); //Hello Bhushan Pandagre
