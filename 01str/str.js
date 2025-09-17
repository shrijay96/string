//data tyype first is Primitive
//  7types of datatype: String: Number: Boolean: null: undefined: Symbol: BgINT

const score =100
const scorevalue =100.9

const isLoggedIn =false 
//const outsideTemp -null
//let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id ===anotherId);

const bigNumber = 21354345n

//2 Reference (Non primitive)

// Arrray ,Object, Function 
const heros =["shaktiman","Arjun","Bhim"];
let myObj = {
    name :"shrijay",
    age:22,
}
const myFunction = function(){
    console.log("HelloWorld");

}

console.log(typeof anotherId);

// stack (primitive ),(non primitve )

let myYoutubename="shrijay"

let mycodewithshrijay = myYoutubename
console.log(mycodewithshrijay);

mycodewithshrijay ="chaiaurcode"

console.log(myYoutubename);
console.log(mycodewithshrijay);

// heap (non primitive)
let userOne ={
    email : "shrijay@good.com",
    upi :"shrijay@akdf",

}
let userTwo = userOne

userTwo.email="shri@exi.com"
console.log(userOne.email);
console.log(userTwo.email);