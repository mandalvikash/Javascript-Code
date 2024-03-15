const marvel=["Thor","Ironman","Spiderman"]
const dc=["Superman","Flash","batman"]

marvel.push(dc) //It will push array in array  
console.log(marvel)    //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'batman' ] ]
console.log(marvel[3]) //[ 'Superman', 'Flash', 'batman' ]
console.log(marvel[3][0])// Superman


//It will give the all elements in another array
dc1=["Superman","Flash","batman"]
marvel1=["Thor","Ironman","Spiderman"]
const all=marvel1.concat(dc1)  // This will also be same as push
console.log(all)//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


//Spread this will also be same as concat we used this method more in javascript
const all_new=[...dc1,...marvel1]
console.log(all_new)//[ 'Superman', 'Flash', 'batman', 'Thor', 'Ironman', 'Spiderman' ]


const arr2=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another=arr2.flat(3)  // 3 will be the level we want to  spread in array
console.log(real_another)   // [
                            //   1, 2, 3, 4, 5,
                            //   6, 7, 6, 7, 4,
                            //   5
                            // ]

console.log(Array.isArray(arr2))  //true
console.log(Array.isArray("Hitesh"))//false

console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"Hitesh"}))// This will be intesting it will give empty array  []
 

const s1=100
const s2=200
const s3=300
console.log(Array.of(s1,s2,s3))//[ 100, 200, 300 ]