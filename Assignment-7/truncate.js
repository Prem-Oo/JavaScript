// question 1
let fun=(string)=>{
    if(string.length<5)
        return string;
    else{
        return string.slice(0,4);
    }
}
console.log(fun('ice'));
console.log(fun('hi'));
console.log(fun('icecream'));
