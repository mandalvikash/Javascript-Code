//if

const isUserLoggedIn=true
if(isUserLoggedIn){
    console.log("User is loggedIn")
}


if(2=="2"){
    console.log("Executed")
}else{
    console.log("Not Executed")
}

//strict checking it is also checking the type of the data
if(2==="2"){
    console.log("Executed")
}else{
    console.log("Not Executed")
}


// score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power :${power}`);
// }
// console.log(`user power :${power}`);//Power is defined 


// const balance=1000
// // if(balance>500)console.log("test")

// if(balance<500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else {
//     console.log("balance is 1000")
// }


// const userLogged=true
// const debitCard=true
// const userLoggedFromEmail=true
// const userLoggedFromGoogle=false
// if(userLogged && debitCard){
//     console.log("Allow to buy course");
// }

// if(userLogged && debitCard && (userLoggedFromEmail || userLoggedFromGoogle)){
//     console.log("Allow to buy course");
// }


//switch

const month=2
switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;

    case 3:
        console.log("Mar")
        break;

    case 4:
        console.log("Apr")
        break;
    case 5:
        console.log("May")
        break;
    
    case 6:
        console.log("Jun")
        break;

    default:
        console.log("Default case match")
}
