// 1). Create a function that finds the maximum range of a triangle's
// third edge, where the side lengths are all integers.
// Examples
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 10

const nextEdge=(s1,s2)=>{
    if(s1>0 &&s2>0)
        return s1+s2-1;
}
console.log(nextEdge(8,10));
console.log(nextEdge(5,7));
console.log(nextEdge(9,2));