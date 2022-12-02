// 8). Is it possible to nest async functions in JavaScript? Explain with examples.
async function promiseAllDemo() {
  try {
    const promise1 = Promise.resolve("hello world");
    const promise2 = "Promise 2";
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, "foo");
    });
    const resolvedPromises = await Promise.all([promise1, promise2, promise3]);
  } catch (err) {
    console.log(err);
  }
}