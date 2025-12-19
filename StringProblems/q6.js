// URLify a given string (Replace spaces is %20)
// Input:  "React makes UI simple"
// Output: "React%20makes%20UI%20simple"

let ip = "  React makes UI simple  ";
function url(ip) {
  //   let output = ip.trim().replaceAll(" ", "%20");
  let output = ip
    .trim()
    .split("")
    .map((char) => (char === " " ? "%20" : char))
    .join("");
  return output;
}

console.log(url(ip));
