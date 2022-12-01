// 3). Write a regular expression that matches only a prime number.
// Numbers will be presented as strings.
// Example
// “7” ➞ true
// “134” ➞ false


function isPrime(n) {
    var re = /^.?$|^(..+?)\1+$/;
    return !re.test('1'.repeat(n));
}
console.log(isPrime('7'));
console.log(isPrime('134'));