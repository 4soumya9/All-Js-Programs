/*For example, if the input is "abcdef@zethic.com",
 the function should return "axcxex@zethic.com".*/

/*Write a function that takes a string representing an email address as input and returns a new string with the following modifications:

1. Replace every other character in the email address (excluding the domain part) with the letter 'x'.
2. Preserve the case of the original email address.
3. Keep the domain part of the email address unchanged.*/

console.log(email("abcdef@zethic.com"));
function email(str) {
  let result = "";
  let div = str.split("@");
  let domain = div[1];
  let firstPart = div[0];

  for (let i = 0; i < firstPart.length; i++) {
    let char = firstPart[i];
    let alphabet = (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
    let digit = char >= "0" && char <= "9";
    if ((alphabet || digit) & (i % 2 === 1)) {
      result += char >= "A" && char <= "Z" ? "X" : "x";
    } else {
      result += char;
    }
  }

  return result + "@" + domain;
}
