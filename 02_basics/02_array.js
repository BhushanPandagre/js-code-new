const array = new Array(1, 3, 5, 6, 8);
console.log(array);

const marval_heros = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];
const myHeroes = ["Hanuman ji ", "shiv ji", "vishnu ji"];

// marval_heros.push(dc_heroes)
//array ke ander array aa jata hai ...!!
//console.log(marval_heros)
//console.log(marval_heros[3])//[ 'superman', 'flash', 'batman' ]

//console.log(marval_heros[3][0])//superman

const allheroes = marval_heros.concat(dc_heroes);
//concat new array return karta hai ..!!
console.log(allheroes);
//output:-[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marval_heros, ...dc_heroes, ...myHeroes];
// ab ye array nhi rha ab isme ek ek value alg alg ho gai hai ...yhi kam hai sprade operator ka ...!!

console.log(all_new_heros);
//output:-[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

console.log(real_another_array);
//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

//===============
console.log(Array.isArray("Bhushan")); //false
console.log(Array.from("Bhushan"));
//return a array
// like this:- ['B', 'h', 'u','s', 'h', 'a','n']

console.log(Array.from({ name: "Bhushan" })); //intresting case  //[]..ek emty array denga ...kyuki ye samj nhi pa rha hai ki ..key ko array m convert karna hai ...ya value ko ...!!

//=========
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
// Returns a new array from a set of elements.
//output:-[ 100, 200, 300 ]
