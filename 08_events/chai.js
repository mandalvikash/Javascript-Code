// document.getElementById('owl').onclick=function(){
//     alert('owl clicked')
// }

//best approache

//type,timestamp,defaultPreented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode

//if false down to up (bubbling)
document.getElementById('images').addEventListener('click',function(e){
    console.log("Clicked inside the ul");
},false)

document.getElementById('owl').addEventListener('click',function(e){
    console.log("Owl Clicked");
    e.stopPropagation()//it stop the bubble
},false)


//If true the up to down(capturing)
// document.getElementById('images').addEventListener('click',function(e){
//     console.log("Clicked inside the ul");
// },true)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("Owl Clicked");
// },true)

//attachEvent()
//jQuery

// document.getElementById('google').addEventListener('click',function(e){
//     console.log('Google clicked');
//         e.preventDefault();
//         e.stopPropagation();
// },false)


document.querySelector('#images').addEventListener('click',function(e){
                 console.log(e.target)
                 console.log(e.target.parentNode)
                 console.log(e.target.tagName);
                 if(e.target.tagName==='IMG'){
                    console.log(e.target.id)
                 let removeIt=e.target.parentNode;

                 // both can use to remove the photo
                 removeIt.remove();
                   // removeIt.parentNode.removeChild(removeIt)
                }

},false)