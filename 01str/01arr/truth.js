// Falsy values

//false ,0,-0,BigInt 0n, null, undefined, NaN

// truthly values

//"0", 'false, " ",[],{},function(){}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}
// Nullish Coalescing Operator (??); null undefined

let val1;
//val1 = 5 ?? 10
// val1 -null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 12 ?? 17

//console.log(val1);

//Ternary Operator
// Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80"): console.log("more than 80")