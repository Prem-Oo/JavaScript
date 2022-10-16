let matchsticks=(n)=>{
    if(n>0){
        return (n===1) ? 6:6+(n-1)*5;
    }
}
console.log(matchsticks(1));  // 1 house
console.log(matchsticks(4));   // 4 houses
console.log(matchsticks(87));   // 87 houses
console.log(matchsticks(-12));