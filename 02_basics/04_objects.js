//object 02
// const tindder = new Object();//singleton object
const user = {}; //non singleton object
// console.log(tindder);//{}
user.id = "123asc";
user.name = "bhushan";
user.email = "pandagrebhushan3@gmail.com";
user.number = "8823456789";
user.IsloggedIn = false;

//  console.log(user);
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullName: {
      firstName: "bhushan",
      lastName: "pandagre",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.fullname.userfullName.lastName)

//how to combine object

const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "c", 4: "d" };
const object3 = { 5: "e", 6: "f" };

// const obj3 = {object1,object2}
// console.log(obj3)
//{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'c', '4': 'd' } }..problem

//How to solve it
// const obj3 = Object.assign({}, object1, object2,object3);
// console.log(obj3);
//output:-{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//Another way
const obj3 = { ...object1, ...object2, ...object3 };
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// when u get data form data base

const Users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];

console.log(Users[1].email);
console.log(Users[1].id);

console.log(user);
console.log(Object.keys(user)); //[ 'id', 'name', 'email', 'number' ]
console.log(Object.values(user));
//[ '123asc', 'bhushan', 'pandagrebhushan3@gmail.com', '8823456789' ]
console.log(Object.entries(user));
//[[ 'id', '123asc' ],[ 'name', 'bhushan' ],[ 'email', 'pandagrebhushan3@gmail.com' ],[ 'number', '8823456789' ]]
// how to know specific property available or not
console.log(user.hasOwnProperty("IsloggedIn"));
// if available :: true

//object destructuring

const course = {
  courseName: "Js in hindi ",
  price: "999",
  courseInstructor: "Bhushan",
};

// const {courseInstructor,price,courseName} = course;
const { courseInstructor: instructor, price, courseName } = course;
console.log(price);
// console.log(courseInstructor);
console.log(instructor);
console.log(courseName);
