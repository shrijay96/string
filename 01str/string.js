const name ="shrijay"
const repoCount =100

//console.log(name + repoCount +" " + "codewithshrijay"); old way to concanite string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//new way yo concanate string

const gameName = new String('shrijay-sk')
console.log(gameName[0]);
console.log(gameName.__proto___);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,5)
console.log(newString);

const secString = gameName.slice(3)
console.log(secString);

const thirdString = "   shrijaykumar  "
console.log(thirdString);
console.log(thirdString.trim());

const url = "hhtps://codewithshrijay.com"
console.log(url.replace('codewith','-'));

console.log(url.includes('shrijay'));
console.log(gameName.split('-'));



