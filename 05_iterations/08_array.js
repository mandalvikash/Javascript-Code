const coding=["js","rb","py","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)//undefinded 

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4)
console.log(newNums)

const newNums1=myNums.filter((num)=>{
    return num>4
})
console.log(newNums1)


const newN=[]
myNums.forEach((num)=>{
    if(num>4){
        newN.push(num)
    }
})
console.log(newN)