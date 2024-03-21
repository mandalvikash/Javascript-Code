const user={
    username:"Vikash",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        // console.log(this) //This will call the user and print all of the inner elements username,price,welcoemMessage
    }
}

user.welcomeMessage()//Vikash,welcome to website
user.username="Aman"
user.welcomeMessage()//Aman,welcome to website


console.log(this)//{}


function chai(){
    console.log(this)
}
chai()
//The ouptut will be this
/*
   <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/


function chai1(){
    let username="Mandal"
    console.log(this.username)//undefined
}
chai1()
const chai2=function(){
    let username="Vikash"
    console.log(this.username)//undefined
}
chai2()

const chai3=()=>{
    let username="Vikash"
    console.log(this.username)//undefined
    console.log(this)//{}
    console.log(username)//Vikash
}
chai3()

const Sum=(num1,num2)=>{
    return num1+num2
}
console.log(Sum(3,6))//9

const Sum1=(num1,num2)=>num1+num2
console.log(Sum1(9,2))//11

const Sum2=(num1,num2)=>(num1+num2)
console.log(Sum2(4,8))//12


const Sum3=(num1,num2)=>({username:"Vikash Mandal"})
console.log(Sum3(3,6))//{ username: 'Vikash Mandal' }


const myArr=[1,2,3,4,5,6,7,8]

myArr.forEach(function(){

})
myArr.forEach(()=>{
    
})
