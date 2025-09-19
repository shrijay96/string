// singletonen

// obeject liitrerals
//object.create


const mySymbol = Symbol("key1");

const jsUser = {
    name: "shriajy",
    age: 22,
    location: "jaipur",
    email: "shri@gmail.com",
    isloggedin: false,
    [mySymbol]: "key1",
    lastlogin: ["monday", "sunday"]
};

console.log(jsUser.email);
console.log(jsUser["location"]);
console.log(jsUser["name"]);       //some of the vairables you need to access from square bracket
console.log(jsUser[mySymbol]);
console.log(jsUser["email"]);

jsUser.email = "kumar@gmail.com"
//Object.freeze(jsUser)
jsUser.email ="shrijay6@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user ");
}
        
jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name} `);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());