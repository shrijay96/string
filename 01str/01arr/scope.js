// var c = 100
let a = 200
if(true){
    let a = 10
    const b = 20
    //console.log("INNER:",a);

}

//for (let i =0;i < Array.length; i++) {
    //const element = aaray[i];
//}
//console.log(a);
//console.log(b);
//console.log(c);

//. Nested Scope

function one(){
    const username ="shrikumar"

    function two(){
        const wensite ="youtube.com"
        console.log(username);

    }
   // console.log(wensite);
   // two()

}
one()

if(true){
    const username ="shrikuar"
    if(username =="shrikuar"){
        const website ="youtubecom"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);
//+++++++++++++Intresting++++++++++++++


console.log(addone(5))
function addone(num){
    return num+1
}



const addTwo = function(num){
    return num+2
}
//console.log(addTwo(5));
//wee canot declare function like this