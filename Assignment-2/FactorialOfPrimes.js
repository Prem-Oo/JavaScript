function factorial(n){
    if(n===0|| n===1)
        return 1;
    return n*factorial(n-1);
}
function primeFactorial(x,y){
    for(i=x;i<=y;i++){
        let flag=true;
        for(j=2;j<i;j++){
            if(i%j==0){
                flag=false;
                break;}
        }
        if(flag){
            console.log(`factorial of ${i} is :${factorial(i)}`);
        }
    }
}
primeFactorial(1,100);