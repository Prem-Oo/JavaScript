// 3. Write a JavaScript program to iterate over an array inputted by the user using
// mapping. Perform the square of all elements in the original array, store the
// squares in a new array and make a mapping for the squares and display it.
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Output:
// [ 1, 4, 9, 16, 25 ]

let arr=[1,2,3,4,5];
let new_arr=arr.map(num=>num*num);
console.log(new_arr);