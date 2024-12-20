// // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// // A Promise is in one of these states:

// // pending: initial state, neither fulfilled nor rejected.
// // fulfilled: meaning that the operation was completed successfully.
// // rejected: meaning that the operation failed.

// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB calls , cryptography ,network

//   setTimeout(function () {
//     console.log(" Async task is complited ");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Promise is completed");
      resolve();
    }, 1000);
  });
  
  promiseOne.then(function () {
    console.log("promise is consumed ");
  });
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task is comleted");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("promise is consumed");
  });
  
  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("promise three is completed..!!");
  
      resolve({ username: "bhushan", code: "chai aur code " });
    }, 1000);
  });
  
  promiseThree.then(function (user) {
    console.log(user);
  });
  
  const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("task four is connected");
      // let error = true;
      let error = false;
  
      if (!error) {
        resolve({
          username: "Bhushan",
          Email: "bhushan@gmail.com",
          password: "123",
        });
      } else {
        reject("Error:something is happening ");
      }
    }, 1000);
  });
  
  promiseFour
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      console.log(username);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("promise ether resolve or rejected "));
  
  //================promise five
  
  const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      //  let error = true;
      let error = false;
      if (!error) {
        resolve({ username: "Javascript", password: "123" });
      } else {
        reject("Error:js went wrong");
      }
    }, 1000);
  });
  
  async function consumePromiseFive() {
    try {
      const response = await promiseFive;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  consumePromiseFive();
  
  // Api call
  
  // async function gateAllData() {
  
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  // gateAllData();
  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  
  const promiseSix = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
  
      if (!error) {
        resolve({ username: "Bhushan", email: "pandagrebhushan3@gmail.com" });
      } else {
        reject("Error: bhushan not find ..!!..something went wrong ");
      }
    }, 1000);
  });
  
  async function consumePromise() {
    try {
      const response = await promiseSix;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  consumePromise();
  