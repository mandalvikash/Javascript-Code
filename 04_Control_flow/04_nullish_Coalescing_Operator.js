
//Nulish Coalesing Opoerator(??):null definded
//It will neglet the null value or defined values
let val1;
val1=5??10
console.log(val1)//5

let val2=null??10
console.log(val2)//10

let val3=null??10??20
console.log(val3)//10