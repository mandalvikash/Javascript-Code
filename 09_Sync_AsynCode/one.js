
// setTimeout(function(){
//     console.log("Vikash")
// },5000)

//  const sayVikash=function(){
//     console.log("Vikash")
//  }

// setTimeout(sayVikash,2000)

const changeText=function(){
    document.querySelector('h1').innerHTML="Best JavaScipt Series"
}
const changeMe=setTimeout(changeText,2000)
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})