// 2. Iterate over all the characters of the word “iNeuron”.

let it="iNeuron"[Symbol.iterator]();
let i=it.next();
while(!i.done){
    console.log(i.value);
    i=it.next();
    
}
