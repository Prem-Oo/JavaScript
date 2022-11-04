// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

// Answer
//   Filter, Map, Reduce are inbuilt higher order function in JS.

// (FIlter) Higher Order functions accept other functions as arguments.

const even=[10,2,6,3,7,8,5].filter((num)=>{
    return num%2===0;
})
console.log(even);