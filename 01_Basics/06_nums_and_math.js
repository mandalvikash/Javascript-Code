const score=300
console.log(score)//300

const balance=new Number(100)
console.log(balance)//[Number: 100]

console.log(balance.toString())//100
console.log(balance.toString().length)//3
console.log(balance.toFixed(2))//100.00

const n=23.43
console.log(n.toPrecision(2))//23

const num=1123.8644
console.log(num.toPrecision(2))//1.1e+3
console.log(num.toPrecision(3))//1.12e+3

const n1=123.8966
console.log(n1.toPrecision(4))//123.9

const hundreds=1000000
console.log(hundreds.toLocaleString())//1,000,000
console.log(hundreds.toLocaleString('en-IN'))//10,00,000



//************************Maths****************************** */
console.log(Math)
console.log(Math.abs(-4))//makes negative positive 4
console.log(Math.abs(4))// no change alredy positive

console.log(Math.round(4.6))//it makes 5
console.log(Math.round(4.3))//it makes 4

console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9))//4

console.log(Math.min(4,5,6,7,83,5))//4
console.log(Math.max(4,5,6,7,83,5))//83

console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
const ans=Math.floor(Math.random()*(max-min+1))+min
console.log(ans)
