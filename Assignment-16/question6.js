// Create a function that takes a word and returns true if the word
// has two consecutive identical letters.
// Examples
// doubleLetters("loop") ➞ true
// doubleLetters("yummy") ➞ true

function doubleLetters(str){
    return /(.).*\1/.test(str);
}
console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));
