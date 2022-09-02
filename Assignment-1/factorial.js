//Write a program to find the factorial of a number.
let fact=(num)=>{
    let result =(num>1)? num*fact(num-1):1;
    return result;
}
console.log(fact(5));