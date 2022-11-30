// 2. Write a JavaScript program to
// a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F
// b) Map the grades of each student
// c) Group students according to the grades they have received and display.

let students = [
{ name: "John", marks:'92' },
{ name: "Oliver", marks: '85' },
{ name: "Michael", marks: '79' },
{ name: "Dwight", marks:'95'},
{ name: "Oscar", marks: '64' },
{ name: "Kevin", marks: '48' }
];
let map=new Map();
let A=[],B=[],C=[],D=[],E=[],F=[];
for(let i in students){
    let marks=parseInt(students[i].marks);
    switch(true){
        case marks>90:
            students[i].marks='A';
            A.push(students[i]);
            break;
         case marks>80:
            students[i].marks='B';
            B.push(students[i]);
            break;
        case marks>70:
        students[i].marks='C';
            C.push(students[i]);
            break;
        case marks>60:
            students[i].marks='D';
            D.push(students[i]);
            break;
        case marks>50:
           students[i].marks='E';
            E.push(students[i]);
            break;
        default:
          students[i].marks='F';
            F.push(students[i]);
    }
}
map.set("A",[...A]);
map.set("B",[...B]);
map.set("C",[...C]);
map.set("D",[...D]);
map.set("E",[...E]);
map.set("F",[...F]);

console.log(map);

// output:
// Map(6) {
//   'A' => [ { name: 'John', marks: 'A' }, { name: 'Dwight', marks: 'A' } ],
//   'B' => [ { name: 'Oliver', marks: 'B' } ],
//   'C' => [ { name: 'Michael', marks: 'C' } ],
//   'D' => [ { name: 'Oscar', marks: 'D' } ],
//   'E' => [],
//   'F' => [ { name: 'Kevin', marks: 'F' } ]
// }