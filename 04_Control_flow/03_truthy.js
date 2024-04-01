const userEmsil=[]
if(userEmsil){
    console.log("Got the user email ")
}else{
    console.log("Dont have user email")
}

//falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
//true,"0","false"," ",[],{},function(){}


if(userEmsil.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
