// 4. In the following two arrays find which two elements match
// using iterators.
// Array 1 - [“a”, “b”, “c”, “d”]
// Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]

let arr1=['a','b','c','d'];
let arr2=['e','f','g','h','a','i','d'];
let it1=arr1[Symbol.iterator]();
let i=it1.next();
while(!i.done){
    if(arr2.includes(i.value)){
        console.log(`match element ${i.value}`);
    }
    i=it1.next();
}
