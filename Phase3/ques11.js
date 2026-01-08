// 11. Write a JavaScript function that returns the Fibonacci
// sequence up to a given number of terms.

const numTerms = 10;
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function fibbo(numTerms) {
  let seq = [0, 1];
  if (numTerms <= 0) {
    return [];
  } else if (numTerms === 1) {
    return [0];
  }

  for (let i = 2; i < numTerms; i++) {
    const nextFibbo = seq[i - 1] + seq[i-2];
    seq.push(nextFibbo);
  }
  return seq;
}
console.log(fibbo(numTerms));
