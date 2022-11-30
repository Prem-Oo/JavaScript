// 2. Write a program in JavaScript to map the student ids, names and scores.
// a) Add data for 3 students (use map functions)
// b) Get Student Names using map functions
// c) Delete Student Scores using map functions

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student
// Sample Input:
// "id": [ 1, 2, 3 ]
// "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// "scores": [ 90, 88, 92 ]

const map=new Map();
map.set("id",[1,2,3]);
map.set("names",["Hitanshu","Ninad","Amandeep"]);
map.set("scores",[90,88,92]);

console.log(map.get("names"));
console.log(map.delete('scores'));
map.set("scores",[90,88,92]);


console.log(map.values())

map.forEach((v,k)=>console.log(k,v));

map.forEach((v,k,map)=>console.log(k,v,map));