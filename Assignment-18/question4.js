// 4. Create a generator for multiplying?
function* multiplying(num){
    console.log(`${num} * ${num} =?`)
    yield num*num;
}
console.log(multiplying(2).next().value);
console.log(multiplying(3).next().value);

// output:
// 2 * 2 =?
// 4
// 3 * 3 =?
// 9