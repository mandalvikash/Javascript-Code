let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.loworHi')
const startOver=document.querySelector('.resultPass')


const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number')
   }else if(guess<1){
    alert('Please enter number more than 1')
   }else if(guess>100){
    alert('Please enter a number less than 100')
   }else{
    prevGuess.push(guess)
    if(numGuess===11){
        console.log(numGuess)
        displayGuess(guess)
        displayMessage(`Game over Random numebr was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }
}

function checkGuess(guess){
if(guess===randomNumber){
    displayMessage('You guess it right')
    endGame()
}else if(guess<randomNumber){
    displayMessage(`Number is Too Low`)
}else if(guess>randomNumber){
    displayMessage(`Number is Too High`)
}
}

function displayGuess(guess){
      userInput.value=''
      guessSlot.innerHTML+=`${guess}  `
      numGuess++
      let rem=Math.max(0,11-numGuess)
      remaining.innerHTML=`${rem}`
}

function displayMessage(message){
    const element = document.querySelector('.lowOrHi');
    if (element) {
        element.innerHTML = `<h2>${message}</h2>`;
    } else {
        console.error("Element with class 'lowOrHi' not found");
    }
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
    
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
             randomNumber=parseInt(Math.random()*100+1)
             prevGuess=[]
             numGuess=1
             guessSlot.innerHTML=''
             remaining.innerHTML=`${11-numGuess}`
             userInput.removeAttribute('disabled')
             startOver.removeChild(p)
             playGame=true
    })

}