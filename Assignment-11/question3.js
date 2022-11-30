// 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
// Note: Do not use array.flat();


let arr=[ 1, 2, [ 3, 4, [ 5 ] ] ]
// let flatten=(arr)=>[].concat(...arr);
// console.log(flatten(arr));

let flattenArray=arr.toString().split(",").map(Number);
console.log(flattenArray);