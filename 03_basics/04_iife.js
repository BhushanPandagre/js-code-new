//Immediately Invoked Function Expression (IIFE)

function chai() {
  console.log(`DB CONNECTED`);
}
chai();

//IIFE
// ()()

(function coffe() {
  //named IIFE
  console.log("Bhushan Database connected sucssesfully ");
})();

((name) => {
  console.log(`Data base second connected: ${name} `);
})("Bhushan");
