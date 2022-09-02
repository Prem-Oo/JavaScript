//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function celsius(f){
  let c =5*(f-32)/9;
return c;
}
function fahrenheit(c){
    let f=((c*9)/5)+32;
  return f;
}
console.log(celsius(45));
console.log(fahrenheit(7.2222222222222))
  
