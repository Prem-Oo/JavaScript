function check(side1, side2, side3){
    if(side1===side2 && side1===side3){
        return 'equilateral Triangle';
    }
    else if(side1===side2 || side2===side3 || side1===side3 ){
        return'isosceles triangle';
    }
    else
        return 'scalene triangle';
}
console.log(check(3,4,5));
console.log(check(12,12,12))
console.log(check(12,12,45));