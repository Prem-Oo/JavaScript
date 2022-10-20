// 3. Create a set object with four random numbers from 0 to 10. Check if this
//     newly created set object has 8 in it. Use set object methods.

let set1=new Set();
while(set1.size!==4){
    set1.add(Math.floor(Math.random()*10));
}
console.log(set1);
console.log(set1.has(8));