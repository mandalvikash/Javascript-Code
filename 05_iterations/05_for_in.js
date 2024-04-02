const myObj={
    js:'Javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for(const key in myObj){
    console.log(myObj[key])
}

const prog=["js","rb","py","java","cpp"]
for(const key in prog){
    console.log(key)
}
for(const key in prog){
    console.log(prog[key])
}