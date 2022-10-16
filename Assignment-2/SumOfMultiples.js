function sum(x){
    result=0;
    let count=1;
    while(count<=1000){
        result+=(x*count);
        count++;
    }
    return result;
}
console.log(`sum of multiples of 3 and 5 : ${sum(3)+sum(5)}`);
