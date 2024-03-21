// let a=10
const b=20
// var c=30

// console.log(a)
// console.log(b)
// console.log(c)
let x=133
let a=100
if(true){
    let a=10
    console.log("INNER:",a)//10
    x=223
    console.log("INNER:",x)//223
    var c=30
}
// console.log(a)  //Not defined
// console.log(b) // Not defined
console.log(c)    //30
console.log("OUTER:",a)//100
console.log("OUTER:",x)//233


function one(){
    const username="Vikash"
    
    function two(){
        const website="Youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
one()


if(true){
    const username="Vikash"
    if(username==="Vikash"){
        const website=" Youtube"
        console.log(username+website)
    }
    // console.log(website) //Not in scope
}
// console.log(username)  //Not in scope



//+++++++++++++++++++++++Intrsting++++++++++++++++++++

console.log(addOne(8))//9

function addOne(num){
    return num+1
}
console.log(addOne(4))//5



// console.log(addTwo(7)) //This will show you error

const addTwo=function(num){
    return num+2
}
console.log(addTwo(6))//8