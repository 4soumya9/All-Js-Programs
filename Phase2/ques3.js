//currying
// 🔹 What is Currying? (Simple & Interview-friendly)

// Currying is a technique where a function does not take all arguments at once.
// Instead, it takes one argument at a time and returns a new function.

// infinite currying
function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b);
    }
    return a; // stoping condition
  };
}

// add(2)(3)(4);
console.log(add(2)(3)(4)());
// ⭐ Interview one-liner why one extra ()?

// “An extra () works only when the function keeps returning another function;
//  otherwise it causes a TypeError.”

// for two number

function addTwo(a) {
  return function addTwo(b) {
    return a + b;
  };
}
console.log(addTwo(2)(23));
