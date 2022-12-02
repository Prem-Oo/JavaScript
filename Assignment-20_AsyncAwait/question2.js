// 2). Is it possible to use async/await with promise chains? If yes,
// how can this be achieved?

function func1(){
    return "hi ! ";
}
function func2(v1){
    return v1+" Good morning"
}
async function test() {
    let v1 = await func1();
    let v2 = await func2(v1); 
    return await func3(v1, v2);  
}
test()
function func3(v1,v2){
    console.log(v1+v2);
}