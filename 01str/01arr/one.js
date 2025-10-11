// if else
const Tempereture =42

if (Tempereture <50){
   // console.log("Yes Less than 50");

} else {
//console.log("temperaturebis greater than 50");
}
// <,>, <=, >=, ==,!=, === ,!==

const score =200
if (score > 100){
    let power = "fly"
    console.log(`user power :${power}`);

}

//console.log(`User power :${power}`);



const balance = 600;
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 1000) {
    console.log("less than 1000");
} else {
    console.log("more than 1200");
}

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail =true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy the course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");

}