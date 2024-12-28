//for

// for(let i=0;i<=10;i++){
//    const element = i;
//    console.log(element);
// }

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element === 5) {
    // console.log("5:is a best number koi problem");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop:${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["saktiman", "sakal", "doga", "khali", "gitavishvas"];

// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

//break and continue

for (let i = 1; i <= 20; i++) {
  //for continue
  // if(i===5){
  //   continue;
  // }//if u want to skip the specific value then u have to use continue ..!!

  //for breck

  if (i == 5) {
    console.log(`${i}: detected`);
    break;
  }
  console.log(`Value of i is :${i}`);
}
