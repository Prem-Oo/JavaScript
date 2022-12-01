// 3. Create a functional iterator, with a next function.
function nextIterator(arr) {
  let count = 0

  function next() {
    return arr[count++]
  }

  return {
    next
  }
}

const array = [1, 2, 3];
const iteratorWithNext = nextIterator(array);

console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()) // -> should log 3