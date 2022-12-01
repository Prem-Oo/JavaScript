// 4). Create a function that will return an integer number
// corresponding to the amount of digits in the given integer num
// Examples
// num_of_digits(1000) ➞ 4

const num_of_digits=(num)=>{
    let count=0;
    while(num>0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
}
console.log(num_of_digits(1000));
console.log(num_of_digits(12));
 console.log(num_of_digits(1305981031));

