class Cylinder{
    constructor(r,h){
        this.r=r;
        this.h=h;
    }
    getVolume(){
        return Math.PI*(this.r*this.r)*this.h;
    }
}
class Sphere{
    constructor(r){
        this.r=r;
    }
    getVolume(){
        return Math.PI*(this.r*this.r*this.r)*(4/3);
    }

}
class Cone{
    constructor(r,h){
        this.r=r;
        this.h=h;
    }
    getVolume(){
        return Math.PI*(this.r*this.r)*this.h/3;
    }

}
let cyl=new Cylinder(5,7);
let cone=new Cone(3,6);
let sphere=new Sphere(4);

console.log(cyl.getVolume().toFixed(4));
console.log(sphere.getVolume().toFixed(4));
console.log(cone.getVolume().toFixed(4));
