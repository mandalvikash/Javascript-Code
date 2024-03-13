const name="Vikash"
const repoCount=50
//console.log(name+repoCount+"Value");

//String inpulations
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//Hello my name is Vikash and my repo count is 50

const gameName=new String("Vikash-Mandal");
console.log(gameName);//[String: 'Vikash Mandal']

//index
console.log(gameName[0])//h
console.log(gameName.__proto__);//{}
console.log(gameName.length)//13
console.log(gameName.toUpperCase());//VIKASH MANDAL
console.log(gameName.charAt(5))//h
console.log(gameName.indexOf('M'));//7

const newStr=gameName.substring(0,4);
console.log(newStr)//Vika

const anStr=gameName.slice(0,4);
console.log(anStr);//vika
const ansStr=gameName.slice(-8,4);
console.log(ansStr); //no ouput i dont no

//trim or replace
const newStr1="   Vikash   "
console.log(newStr1);//   Vikash   
console.log(newStr1.trim());//Vikash

const url="https:/hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));//https:/hitesh.com/hitesh-choudary
console.log(url.includes('hitesh'));//true



const gameName2=new String("Vikash-Kumar-Mandal");
console.log(gameName2.split('-'))//[ 'Vikash', 'Kumar', 'Mandal' ]