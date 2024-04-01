// for(let i=0;i<=10;i++){
//     console.log(i)
// }


for(let i=1;i<=10;i++){
    console.log(`'Outer loop value:${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inerr loop vcalue ${i} and ineer loop ${j}`);
        console.log(`${i}*${j}=${i*j}`);
    }
}


let myArray=["flash","batman","superman"]
console.log(myArray.length)
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i])
}