const score = 200
console.log(score);
//old way to convert 
const balance = new Number(100);
console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(2));
//console.log(balance.valueOf());

const num2 = 24.9344
console.log(num2.toPrecision(2));

const num3 = 1000000
console.log(num3.toLocaleString('en-IN'));

//========maths========
console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(2.7));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));
console.log(Math.min(2,3,4,5,-1));
console.log(Math.max(2,3,4,5,-1));


console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min +1 )) +min)


