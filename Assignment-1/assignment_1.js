//1. Write a program to find whether a given year is a leap year or not.

let result=(year)=>{
    if(((year%4===0)&&(year%10!=0))|| year%4==0){
        console.log(`${year} is leap year`);
    }
    else
        console.log(`${year} is not leap year`);
}
result(2020);