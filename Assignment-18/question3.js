// 3. Are function generators iterable in JavaScript?

//Answer:

// Generator functions once called, returns the Generator object, which holds the entire Generator iterable
// and can be iterated using next() method. Every next() call on the generator executes every line of code until 
// it encounters the next yield and suspends its execution temporarily.

//example
function* gene(){
    console.log('generator function');
    yield "hi";
}
console.log(gene().next());