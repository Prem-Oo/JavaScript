//Write a Javascript function to test whether the first character of a string is lowercase.
function isLower(st){
    let regex=/^[a-z]/;
    return regex.test(st);
}
console.log(`starts with lower case :${isLower('iNEURON1234@')}`);
console.log(`starts with lower case :${isLower('INEURON')}`);