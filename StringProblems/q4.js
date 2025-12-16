// Write a program to remove duplicates from an array

let arr = [4, 4, 1, 2, 8, 4, 2, 22, 11, 22];
// output : [ 4, 1, 2, 8, 22, 11 ]
function removeDup(arr) {
  let uni = [];
  for (let i = 0; i < arr.length; i++) {
    if (uni.indexOf(arr[i]) === -1) {
      uni.push(arr[i]);
    }
  }
  return uni;
}

console.log(removeDup(arr));
