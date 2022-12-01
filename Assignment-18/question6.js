// 6. Create a generator that can throw an exception.

function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log('Error caught!');
    }
  }
}

const g = gen();
console.log( g.next());
// { value: 42, done: false }
console.log(g.throw(new Error('Something went wrong')));
// "Error caught!"
// { value: 42, done: false }