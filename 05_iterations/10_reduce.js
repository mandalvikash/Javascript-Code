const myNum=[1,2,3]
const myTotal=myNum.reduce(function(acc,currval){
    console.log(`acc:${acc} and curval:${currval}`)
    return acc+currval
},0)
console.log(myTotal)



const myT2=myNum.reduce((ac,curv)=>{
    console.log(`ac:${ac} and curv:${curv}`)
    return ac+curv
},0)
console.log(myT2)