
// Create a function that takes a string, checks if it has the same
// number of x's and o's and returns either true or false.


const XO = s => (s.match(/x/gi) || []).length == (s.match(/o/gi) || []).length;
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));