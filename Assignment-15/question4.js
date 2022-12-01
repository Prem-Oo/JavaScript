// 4). This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15
// triangle(6) ➞ 56 (1+3+6+10+15+21)
// let sum=0;
const add=(num)=>{
    let i=1,sum=0;
    while(num>0){
        sum+=i;
        i++;
        num--;
    }
    return sum;
}
function triangle(num){
    let result=0;
   for(let i=num;i>0;i--)
        result+=add(i);
    return result;
}
// console.log(triangle(4));
// console.log(triangle(5));
console.log(triangle(6));
