// For
for (let i =0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
      //  console.log("5 is best number");
    }
    //console.log(element);
}

for (let i =1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j=1; j<=10; j++){
       // console.log('inner loop value: ${j} and outer loop value: ${i');
       //console.log(i + '*' + j + ' = ' + i *j);
    }

}

let array = ["Hanuman","Nal","Nill","Bibhishan","Ravan"]
//console.log(array.length);
for (let index =0; index < array.length; index++){
    const element = array[index];
    //console.log(element);
}
// break and continue 
for (let i = 1; i <=20; i++){
    if (i == 5){
       // console.log("5 is ditected");
        break;
    }
    //console.log(`value of i:${i}`);
}

// continue
for (let i = 1; i <=20; i++){
    if (i == 5){
        console.log("5 is ditected");
        continue;
    }
    console.log(`value of i:${i}`);
}