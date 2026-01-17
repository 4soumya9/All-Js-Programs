// Infinite Currying

// add(1)(2)(3)(4)(); // 10

function currying(a) {
  let sum = a;
  function next(b) {
    if (b === undefined) {
      return sum; // RETURN #3 (STOP & GIVE ANSWER)
    }
    sum += b;
    return next; // RETURN #2 (CONTINUE)
  }
  return next; // RETURN #1 (START)
}

console.log(currying(1)(2)(3)(40)());
// for infinite calling we need extra bracket

/*Why are there TWO return next?

Because they do different jobs.

1️⃣ return next (OUTSIDE) → To START
return next;


This runs when you call:

currying(1)


Meaning:
👉 "I got the first number. Now give me more."

So it returns the function next.

2️⃣ return next (INSIDE) → To CONTINUE
return next;


This runs when you call:

(2), (3), (4)...


Each time:

It adds the number

Then returns itself again

So you can keep calling it

3️⃣ return sum → To STOP
if (b === undefined) {
  return sum;
}


This runs when you do:

()


 No number → STOP → Give answer*/
