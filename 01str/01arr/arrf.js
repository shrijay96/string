const user = {
    username: "shrikumar",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
};

// user.welcomeMessage();
// user.username = "kuar";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "shrikuar"; // you can't use this keyword like this
//     console.log("this");
//     console.log(this.username);
// }
// chai();

const chai = () => {
    let username = "shrikuar";
    console.log(this);
};
//chai();
//const addTwo = (num1,num2) =>{. use of {} you need to use return key word
    //return num1+num2
//}
//console.log(addTwo(2,3));


//const addTwo = (num1,num2) => num1+num2 another way to erite

//const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"shrikuar"})
console.log(addTwo(2,3));

//const myArr = [1,2,3,4,4]. loop
//myArr.forEach()