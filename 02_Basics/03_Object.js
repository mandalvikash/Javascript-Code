//Singleton
//Object literals
const mySym=Symbol("Key1")
const mySym1=Symbol("key2")
const jsUser={
    name:"Hitesh",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],

    other:"Only one way to acces",
    [mySym]:"This is symbol",
    mySym1:" key2 IS symbol"
}

console.log(jsUser.other)
console.log(jsUser["other"])
//we can access element of object by two method 

console.log(jsUser.name)   //Hitesh
console.log(jsUser["name"])  //Hitesh

console.log(jsUser.email) //hitesh@google.com
console.log(jsUser["email"])  //hitesh@google.com

console.log(jsUser.age)   //18
console.log(jsUser["age"])  //18

console.log(jsUser.isLoggedIn) //false
console.log(jsUser["isLoggedIn"]) //false

console.log(jsUser.lastLoginDays) //[ 'Monday', 'Saturday' ]
console.log(jsUser["lastLoginDays"])//[ 'Monday', 'Saturday' ]

console.log(jsUser.mySym1)//key2 IS symbol  string type
console.log( jsUser["mySym1"]) //key2 IS symbol  string type

console.log(jsUser[mySym])//This is symbol

