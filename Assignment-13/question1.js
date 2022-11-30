// 1. Write a JavaScript program to get an array from the user and return the:
// a) Sum of all elements in the array using reduce()
// b) Average of all elements in the array using reduce()
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Output:
// 15
// 3

let arr=[1,2,3,4,5]
console.log(arr.reduce((sum,val)=>sum+val));//sum : 15
console.log(arr.reduce((sum,val)=>(sum+val))/arr.length);// avg : 3