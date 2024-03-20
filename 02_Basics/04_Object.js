const tinderUser1=new Object()//Single ton object
console.log(tinderUser1) //{}Object

const tinderUser={}//Non single ton object
console.log(tinderUser)//{} object

 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false
console.log(tinderUser)//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vikash",
            lastname:"Mandal"
        }
    }
}
console.log(regularUser.fullname.userfullname)//{ firstname: 'Vikash', lastname: 'Mandal' }


const obj1={
    1:"a",
    2:'b',
    3:"c"
}
const obj2={
    4:"d",
    5:'e',
    6:"f"
}

const obj3={obj1,obj2}
console.log(obj3)//Object inside the object
/*{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'd', '5': 'e', '6': 'f' }
} */

const obj4=Object.assign(obj1,obj2)
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj5=Object.assign({},obj1,obj2)
console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


const obj6={...obj1,...obj2}
console.log(obj6)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


const user2=[
    {
        id:1,
        email:"1stgmail"
    },
    {
        id:2,
        email:"2ndgmail"
    },
    {
        id:3,
        email:"3rdgmail"
    }
]
console.log(user2[0].email)//1stgmail
console.log(user2[0].id)//1


console.log(tinderUser)//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))//[ '123abc', 'Sammy', false ]

//Object inside the object
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"))//true


//Destructuring
const course={
    coursename:"JS in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
console.log(course.courseInstructor)//Hitesh

 const {courseInstructor}=course
console.log(courseInstructor)//Hitesh

const {courseInstructor:Instructor}=course
console.log(Instructor)//Hitesh


//API's
{
    "name":"Vikash",
    "coursename":"JS in English",
    "price":"Free"

}