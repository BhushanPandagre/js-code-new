// for Eeach loop
const programming = ["js", "cpp", "rb", "ts", "java", "py", "swipt"];

// programming.forEach(function (val) {
//   console.log(val);
// });

// programming.forEach((item) => {
//   console.log(item);
// });

// function printme(item) {
//   console.log("Bhushan Pandagre", item);
// }

// programming.forEach(printme);

// programming.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

const myCoding = [
  {
    languageName: "javascript",
    laguageFileName: "js",
  },
  {
    languageName: "c++",
    laguageFileName: "cpp",
  },
  {
    languageName: "Typescript",
    laguageFileName: "ts",
  },
  {
    languageName: "python",
    laguageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  // console.log(item.laguageFileName);
  console.log(`${item.laguageFileName} for ${item.languageName}`);
});
