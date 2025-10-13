const  object ={
    js: "javascript",
    py: "python",
    rb: "ruby",
    cs: "csharp"
}
for (const key in object){
   // console.log(`${key} shortcut is for ${object[key]}`);
}
const programing = ["js","py","rb","cs"]
for (const key in programing){
   // console.log(key);
}

const coding = ["js","py","rb","cs"]
coding.forEach ( function (val){
   // console.log(val);
} )
coding.forEach( (item) =>{
    //console.log(item);
})

function print (item){
    //console.log(item);

}
//coding.forEach(print)
coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
});

const mycoding = [
    { 
        language :"javascrpit",
        filename : "js"
    },
    {
        language :" python",
        filename :"py"
    },
    {
        language: "ruby",
        filename: "rb"
    },
]
mycoding.forEach((item) =>{
    console.log(item.language);

})
