function armstrong(n){
    let r,sum=0,num;
    num=n;
    while(n!==0){
        r=n%10;
        sum+=(r*r*r);
        n=Math.floor(n/10);
    }
    if(num===sum)
        console.log(`${num} is an armstrong number`);
    else
        console.log(`${num} is not an armstrong number`);
}

armstrong(153);
armstrong(370);
armstrong(234);
