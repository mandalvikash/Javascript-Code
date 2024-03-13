console.log(2>4);//false
console.log(2>=3);//false
console.log(2<4);//true
console.log(3<=6);//true
console.log(2==1);//false
console.log(2!=1);//true


//No need to do this type of conversions
console.log("2">1);//true     
console.log("02">1);//true        
console.log(null>0);//falsec     
console.log(null==0);//false
console.log(null>=0);//true

console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false

//strict check it also check data type

console.log("2"===2);//false