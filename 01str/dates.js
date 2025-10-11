// Dates 
let myDate = new Date ()
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());
console.log(typeof myDate);


//let myCreateDate = new Date (2020, 10, 1)
//let myCreateDate = new Date ("01-02-2023")
//let myCreateDate = new Date ("2023-01-12")
let myCreateDate = new Date (2023, 1, 1,10,2,3)
console.log(myCreateDate.toLocaleString());

let myTimestamp = Date.now();

//console.log(myTimestamp);
//console.log(myCreateDate.getTime());
//console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
//'${newDate.getDay()} and the time'

newDate.toLocaleString('default',{weekend: "long",

})
console.log(newDate.toLocaleString());






