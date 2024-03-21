function chai(){
    console.log("DB is connected")
}
chai();//DB is connected

(function chai1(){
    console.log("DB is connected")
})();//DB is connected


((name)=>{
    console.log(`DB is connected ${name} `)
})('Hitesh');//DB is connected Hitesh 