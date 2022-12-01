// 1. Create a function to iterate over the following list [“John”, “Rohn”, “Danny”, “James”]


let iter=["John","Rohan","Danny","James"][Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// output:
// { value: 'John', done: false }
// { value: 'Rohan', done: false }
// { value: 'Danny', done: false }
// { value: 'James', done: false }

