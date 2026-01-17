//Currying
// Supports BOTH add(1,2) and add(1)(2)

function add(a, b) {
  if (b !== undefined) {
    return a + b;
  }

  return function (b) {
    // anonymous function
    return a + b;
  };
}

// console.log(add(1, 2));
console.log(add(1)(20));

// Step 1: add(1) → returns a function
// Step 2: that function(2) → adds numbers

// When the second value is missing,
//  we return another function to take it later

// second function why no naming?
// This is an anonymous function (a function without a name).

// You don’t need to name it because:
// 👉 It is returned immediately
// 👉 It is used instantly
// 👉 It is not reused elsewhere

// So naming it add is unnecessary.
