//const hilexUser = new  Object();
const hilexUser ={}

hilexUser.id ="12abc";
hilexUser.name ="shri";

//console.log(hilexUser);

const regularUser = {
    email: "shri88@gmail.com",
    fullname: {
        userfullName:{ 
        userfirstName: "shrikumar",
        lastname:"kumar"
        }
    }
}
//console.log(regularUser.fullname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "d", 4:"e"}

//const obj3 = {oj1,obj3}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2}
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "shri@8788gmail.com"
    },
    {
        id: 2,
        email: "shrikumar@876gmail.com"
    }
]
//console.log(user[1].email);


//console.log(Object.keys(hilexUser));
//console.log(Object.values(hilexUser));
//console.log(Object.entries(hilexUser));

//console.log(hilexUser.hasOwnProperty("name"));

const course ={
    coursename: "js in hindi",
    price:999,
    courseInstructor:"shrikant"
}

const {courseInstructor:instructor}= course
console.log(instructor);


//{
    name:"shri",
    coursename:"js i hindi",

}
[
    {},
    {},
    {}
]


