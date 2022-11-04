// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

//Ans:
function sum(a, b) {
  console.log(a + b);
}

function operation(x, y, callback) {  // operation is Higherorder function
  callback(x,y);
}

operation(2,3, sum); // sum is callback function
