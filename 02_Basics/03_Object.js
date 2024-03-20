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


console.log(jsUser)
jsUser.email="hitesh@chatgpt.com"
console.log(jsUser)

//after freezeing no change will occur in the user
Object.freeze(jsUser)
jsUser.email="hitesh@microsoft.com"
console.log(jsUser)


const jsUser1={
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
jsUser1.greeting=function(){
    console.log(`Hello JS User`)
}
jsUser1.greetingtwo=function(){
    console.log(`Hello JS User,${this.name}`)
}

console.log(jsUser1.greeting)//[Function (anonymous)]

 jsUser1.greeting       //No ouput
 jsUser1.greeting()     //Hello JS User
 jsUser1.greetingtwo()  //Hello JS User,Hitesh 