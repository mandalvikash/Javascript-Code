//for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i)
}

const greetings="Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//Maps
//It has unique values
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FRA',"France")

// console.log(map)

for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(key,':-',value)
}


const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}

//It is not iterable by for of loop

// for(const [key,value] of myObj){
//     console.log(key,':-',value)
// }