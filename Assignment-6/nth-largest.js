
const find_largest=(n)=>{
    const arr=[3,45,6,7,23,5,7,8];
    arr.sort((a,b)=>a-b);
    return arr[arr.length-n];
}

console.log(find_largest(3));
console.log(find_largest(1));