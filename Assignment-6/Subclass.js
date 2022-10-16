class Rectangle{
    constructor(len,bre){
        this.len=len;
        this.bre=bre;
    }
    area(){
        return this.len*this.bre;
    }
    
}
class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
}
const rect=new Rectangle(4,5);
console.log(rect.area());

const square=new Square(5);
console.log(square.area());
