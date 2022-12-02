// 8) What will the output be?


console.log('start')
setTimeout(() => {
console.log('setTimeout')
})
Promise.resolve().then(() => {
console.log('resolve')
})
console.log('end')

// output:
// start
// end
// resolve
// setTimeout