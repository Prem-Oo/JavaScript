//  2.   What is the difference between a closure and a scope ?
//  ans: closure is a function enclosed with outer-scope variables.

// 3.   What is a lexical scope and how is it related to closure?
// ans: lexical scope allows functions(closures) to access outer scope variables.

let multiply=(num)=>{
    return (x)=> num*x;  // closure
}
let double=multiply(2);
console.log(double(3));
console.log(double(5));
console.log('----------')
let triple=multiply(3);
console.log(triple(3));
console.log(triple(5));
