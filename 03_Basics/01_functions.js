// console.log("V")
// console.log("I")
// console.log("K")
// console.log("A")
// console.log("S")
// console.log("H")

function sayMyName(){
    console.log("V")
    console.log("I")
    console.log("K")
    console.log("A")
    console.log("S")
    console.log("H")
}
sayMyName()


function Add(n1,n2){     //n1 n2 are parameters
    console.log(n1+n2)
}
Add(4,6)//10
console.log(Add(24,22))//undefined


function Sub(n1,n2){     //n1 n2 are parameters
    return n1-n2
}
const sub=Sub(42,23)
console.log("Subtration:",sub)//19


function loginUserMessage(username){
    // if(username===undefined){
    //       console.log("Please enter a username")
    //       return
    // }
    if(!username){
        console.log("Please enter a username")
        return
  }
    return `${username} just logged in`
}
console.log(loginUserMessage("Vikash"))

console.log(loginUserMessage())


function loginUserMessage1(username="Default"){
    return `${username} just logged in`
}
console.log(loginUserMessage1("Vikash"))

console.log(loginUserMessage1())




function calculateCartPrice(num1){
     return num1
}
console.log(calculateCartPrice(3))//3


//Rest opeartor
function calculateCartPrices(...num1){
    return num1
}
console.log(calculateCartPrices(34,53,64,23,54))


const user={
    username:"Hitesh",
    priece:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.priece}`)
}
handleObject(user)


const myNewArray=[23,4,253,52,43,54]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray))//23