const sayDate=function(str){
    console.log(str,Date.now())
}

let intervalId=setInterval(sayDate,2000,"Hello")

document.querySelector('#stop').addEventListener('click',function(){
     clearInterval(intervalId)
     console.log("Stopped")
})
document.querySelector('#start').addEventListener('click',function(){
    clearInterval(intervalId)
    intervalId=setInterval(sayDate,2000,"Hello")
    console.log("Started")
})