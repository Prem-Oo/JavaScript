// 5. What are the different ways of iterating through an array? demonstrate them.

let arr=[1,2,3];
arr.forEach(num=>console.log(num));// using forEach

for(let i in arr)                  // using for-in
    console.log(arr[i]);

for(let e of arr)                   // using for-of
    console.log(e);                


console.log(arr[Symbol.iterator]().next());   // using iterator

