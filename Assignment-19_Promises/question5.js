// 5). Write a function delay that returns a promise. And that promise
// should return a setTimeout that calls resolve after 1000ms.

function delay(){
    return new Promise(()=>setTimeout(()=>console.log("waited 1sec"), 1000));
}
delay();