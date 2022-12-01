// 2). The right shift operation is similar to floor division by powers of
// two. Write a function that mimics (without the use of >>) the right
// shift operator and returns the result from the two given integers. Try
// to solve this challenge by recursion.

const pow=(a,b)=>{
    if(b===1)
        return a;
    return a*pow(a,b-1);
}

const rightShift=(num,count)=>{
    return Math.floor(num/pow(2,count));
}
console.log(rightShift(100,3));
// console.log(100>>3);
