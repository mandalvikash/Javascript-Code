//Arrays
const myArr=[1,2,3,4,6,7]
console.log(myArr[3])

const myCircketer=["Dhoni","Sachin","Virat"]
console.log("The length:",myCircketer.length)


const myArr2=new Array(1,2,3,4)
console.log(myArr2[2])

//Push will add the element to the last of the array
//Pop will remove the last element of the array

const A=[1,2,3,4]
A.push(5) //It will add element to the last of the array
A.push(6)
A.push(7)
console.log(A)
A.pop() // 7      //It  will remove the last element of the array  
A.pop() // 6
A.pop() // 5
console.log(A)//[ 1, 2, 3, 4 ]


//Unshift will add the element to the first of the array
//Shift will delete the element from the first of the array
A.unshift(0)
console.log(A)//[ 0, 1, 2, 3, 4 ]
A.shift()
console.log(A)//[ 1, 2, 3, 4 ]

//Present or not in array
console.log(A.includes(5))//false

//Index of elemtent
console.log(A.indexOf(3))//2

//Join will remove the bracket of arr
const newArr=A.join()
console.log(A)//   [ 1, 2, 3, 4 ]
console.log(typeof A) //object
console.log(newArr) //  1,2,3,4
console.log(typeof newArr) //string



//It will count the comma also 
console.log(newArr[1]) //  ,
console.log(newArr[2])//   2


//slice ,splice
//In slice copy will transfer but in splice orginal elements will transfer
const A1=[1,2,3,4,5,6]
console.log("My org A1:",A1)
const mysl=A1.slice(1,3)
console.log("After slice:",mysl)
console.log("My org A1:",A1)

console.log()

console.log("My org A1:",A1) //[ 1, 2, 3, 4, 5, 6 ]
const mysp=A1.splice(1,3)    //[ 2, 3 ]
console.log("After splice:",mysl)//[ 2, 3 ]
console.log("My org A1:",A1)  //[ 1, 5, 6 ]  