const myNums = [1, 2, 3];

const initialValue = 0;

const sumWithInitial = myNums.reduce(
  (action, currentValue) => action + currentValue,
  initialValue
);

console.log(sumWithInitial);

const myVal = [1, 2, 3, 4];

const myTotal = myVal.reduce(function (acc, currVal) {
  console.log(`acc:${acc} and currVal:${currVal}`);
  return acc + currVal;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
