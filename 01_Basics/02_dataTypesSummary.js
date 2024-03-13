//Primitive 
//7 types:String ,Number,Boolean,null,undefined,Symbol,BigInt

const score=100;
const scoreValue=100.2

const isLog=true;
const outsideTemp=null;
let userEmail;
  
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id);//Symbol(123)
console.log(anotherId); //Symbol(123)
console.log(id==anotherId) //false


const bigNumber=324353246575666n


//Non Primitive\Reference
//Array,Objects,Functions

//array
const cricketer=["Dhoni","Virat","Rohit","AbDevillers"];

//Object
let myObj={
    name:"Dhoni",
    age:42,
}

//Functions

const myfunction=function() {
    console.log("Hello Worls");
}

//checking type of

console.log(typeof bigNumber);




//*******************************MEMORY***************

//Stack(Primitive)
//Heap(Non-Primitive)

let myYoutubename="vikashmandaldotcom"
let anothename="chaiorcode"

console.log(myYoutubename);//vikashmandaldotcom
console.log(anothename);//chaiorcode

let userOne={
    email:"user@google.com",
    user:"user@ybl"
}
let userTwo=userOne
userTwo.email="vikashmanda451@gmail.com"
console.log(userOne.email)//vikashmanda451@gmail.com
console.log(userTwo.email)//vikashmanda451@gmail.com