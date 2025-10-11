function sayMyName(){
    console.log("s");
        console.log("h");
            console.log("r");
                console.log("i");



}
//sayMyName().     basic


function addTwoNumbers(num1,num2){
    //let result = num1 + num2
    //return result
    return num1 + num2

    console.log(num1+num2);

}
//addTwoNumbers(4,5) 

const result = addTwoNumbers(4,5)

//console.log("Result:",result);

function loginUser(username="Raksham"){
    if(!username){
        console.log("please enetr username");
        return
    }
    return `${username}just logged in`

}
//console.log(loginUser("shrikumar"));
//console.log(loginUser());
console.log(loginUser("shrikumar"));


