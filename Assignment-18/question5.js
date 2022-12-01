// 5. Print an infinite series of natural numbers using a generator.

function* naturalNumbers() {
        let number=1;
        while (true)
            yield number++;
}

var naturalNumberIterator = naturalNumbers();

console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);