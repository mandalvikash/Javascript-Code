let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())//Wed Mar 13 2024 11:00:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Wed Mar 13 2024
console.log(myDate.toISOString())// 2024-03-13T11:01:45.176Z
console.log(myDate.toLocaleString())// 3/13/2024, 11:01:45 AM
console.log(myDate.toLocaleTimeString())// 11:02:40 AM

console.log(typeof myDate)//object

const myCreatedDate=new Date(2023,0,23)//==> 0 month means january
console.log(myCreatedDate.toDateString())//Mon Jan 23 2023

const myCreatedDate2=new Date(2023,0,23,5,6,23)
console.log(myCreatedDate2.toLocaleString())//1/23/2023, 5:06:23 AM


const myCreatedDate3=new Date("2023-01-13")
console.log(myCreatedDate3.toLocaleString())// 1/13/2023, 12:00:00 AM

const myCreatedDate4=new Date("12-31-2023")
console.log(myCreatedDate4.toLocaleString())//12/31/2023, 12:00:00 AM


console.log(myCreatedDate.getTime())//1674432000000

let myTimeStamp=Date.now()
console.log(myTimeStamp)//1710328398142

let newDate=new Date()
console.log(newDate)//2024-03-13T11:17:15.784Z
console.log(newDate.getMonth())//2
console.log(newDate.getDay())//3

newDate.toLocaleString('default',{
    weekday:'long',
})
