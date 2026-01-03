//String to object
// input:("a.b.c", "someValue")

// output: {a: {b: {c: "someValue"}}}

let input = ("a.b.c", "someValue");
function StringToObject(str, value) {
  const keys = str.split(".");
  let obj = {};
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = value;
      current = current[key];
    }
  }
  return obj;
}
