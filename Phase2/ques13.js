// sort by freq
const str = "helaalo";
function sortt(str) {
  const map = new Map();

  for (let num of str) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sortedArray = Array.from(map).sort((a, b) => b[1] - a[1]);
  let result = "";
  for (let [char, freq] of sortedArray) {
    result += char.repeat(freq);
    // result += char;
  }
  return result;
}

console.log(sortt(str)); //llaaheo
