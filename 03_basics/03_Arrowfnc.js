//Arrow Function

const user = {
  username: "Bhushan",
  price: 999,

  welcomeMessege: function () {
    console.log(`${this.username},Welcome To our Website`);
    console.log("For this keyword", this);
  },
};

// console.log(user)
// user.welcomeMessege();
// user.username ="Bharti"
// user.welcomeMessege();

console.log(this); //{}...return emty object
// in node invironment

// function chai(){
//     const username = "bhushan"
//     console.log(this.username)//undefined
// }

const chai = () => {
  const username = "bhushan";
  // console.log(this.username)//undefined
  console.log(this); //{}
};
chai();

//Arrow function basic syntext

// ()=>{}....this is oua arrow function

// const addTwo=(num1,num2)=>{
//     return num1 + num2
// }
//Implisit return
// const addTwo=(num1,num2)=>num1+num2;

//Mostly used in react no need to write return
// const addTwo =(num1,num2)=>(num1+num2)

const addTwo = () => ({ username: "Bhushan" });

console.log(addTwo(10, 12)); //22
