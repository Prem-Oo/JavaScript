let fact=(num)=>{
    let result =(num>1)? num*fact(num-1):1;
    return result;
}
let special=(n)=>{
    let r,sum=0,num;
    num=n;
    while(n!==0){
        r=n%10;
        sum+=fact(r);
        n=Math.floor(n/10);
    }
    if(num===sum)
        console.log(`${num} is special number`);
    else    
    console.log(`${num} is not special number`);
}
special(145);
special(40585);
special(123);