// 1. Write a JavaScript program to map Employee Records according to Employee
// IDs.
// Employee: { id, name, salary }
// a) Print an array of all employee ids
// b) Print count of employees
// c) Print the name of the employee according to their id { key: value }
// d) Store the salaries of all employees in an array
// e) Calculate the average salary the company is paying to its employees


let Employee={
    "id":[67,48,29],
    "name":["Hitanshu","Ninad","Amandeep"],
    "salary":[75000,82000,98000]
}

console.log(Employee.id);

console.log(Employee.id.length);

for(let i=0;i<Employee.name.length;i++){
    console.log(Employee.id[i] +":"+Employee.name[i]);
}

let salaries=[];
let Avg_salary,sum=0;
for(let i=0;i<Employee.salary.length;i++){
    salaries.push(Employee.salary[i]);
    sum+=Employee.salary[i];
}
console.log(salaries);

console.log(sum/Employee.salary.length);



