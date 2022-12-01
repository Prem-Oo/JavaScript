// 9). Create a function that takes an array of numbers and returns
// "Boom!" if the digit 7 appears in the array. Otherwise, return "there is
// no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

function sevenBoom(arr){
    return (arr.includes(7)) ?"Boom!" :"there is no 7 in array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6,7]));
console.log(sevenBoom([8, 6, 33, 100]));