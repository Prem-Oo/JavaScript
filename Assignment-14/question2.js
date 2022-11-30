// 2. Write a JavaScript program to filter the hospitals according to:
// a) Number of Beds > 200
// b) Availability of Beds = Yes
// c) Location = Pune

let hospitals = [
{"id": 1, "name":"Hospital A",  "location":"Delhi",   "noOfBeds":450,   'availability':'Yes'},
{"id": 2, "name":"Hospital B",  "location":"Pune",   "noOfBeds":150,  'availability':'No'},
{"id": 3, "name":"HospitalC",   "location":"Pune",   "noOfBeds":350,  'availability':'Yes'}]

const beds200=[];
const Yes=[];
const pune=[];
for(let o of hospitals){
    if(o.noOfBeds>200)
        beds200.push(o);
    if(o.availability==='Yes')
        Yes.push(o);
    if(o.location==='Pune')
        pune.push(o);
}

console.log(beds200);
console.log(Yes);
console.log(pune);
