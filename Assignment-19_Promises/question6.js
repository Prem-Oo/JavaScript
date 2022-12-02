// 6) What will the output be?------  SUCCESS!

Promise.resolve('Success!')
.then(data => {
return data.toUpperCase()
})
.then(data => {
console.log(data)
})