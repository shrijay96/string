const marvelHeroes = ["Thor","Ironman","Spiderman","Hulk"]
const dcHeroes = ["Batman","Superman","Flash","aquadeem"]

//console.log(marvelHeroes);
//console.log(marvelHeroes[0]);

//marvelHeroes.concat(dcHeroes)
//console.log(marvelHeroes);
//const allHeroes = marvelHeroes.concat(dcHeroes);
//console.log(allHeroes);

const all_newHeroes = [...marvelHeroes,...dcHeroes]

//console.log(all_newHeroes);

const hype =[1,2,3,[4,5,6],[6,7[8,9]]]

const realHypeArray = hype.flat(Infinity)
console.log(realHypeArray);


console.log(Array.isArray("shrijay"));
console.log(Array.from("shrijay"));
console.log(Array.from({name:"shrijay"}));// intresting 


let score1 = 1000
let score2 = 2000
let score3 = 3000

console.log(Array.of(score1,score2,score3));
