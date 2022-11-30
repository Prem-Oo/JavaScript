// 1. Write a JavaScript program to:
// a) filter employees according to department = IT
// b) filter employees who earn a salary < 65000

let employees = [
{"id": 1, "name":"Abhinav", "department":"IT", "Salary":75000 },
{"id": 2,"name":"Gaurav","department":"Sales","Salary":52000 },
{"id": 3,"name":"Raj","department":"IT","Salary":64000}            ]

const arr1=[];
const arr2=[];
for(let obj of employees){
    if(obj.department==='IT')
        arr1.push(obj);
    if(obj.Salary<65000)
        arr2.push(obj);
}
console.log(arr1);
console.log(arr2);

// o/p:
// [
//   { id: 1, name: 'Abhinav', department: 'IT', Salary: 75000 },
//   { id: 3, name: 'Raj', department: 'IT', Salary: 64000 }
// ]
// [
//   { id: 2, name: 'Gaurav', department: 'Sales', Salary: 52000 },
//   { id: 3, name: 'Raj', department: 'IT', Salary: 64000 }
// ]
