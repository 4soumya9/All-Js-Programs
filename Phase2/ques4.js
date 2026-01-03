// Merge two sorted array
let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];

// o/p: [0,3,4,4,6,30,31]

function mergee(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < arr1.length || j < arr2.length) {
    let array1 = arr1[i];
    let array2 = arr2[j];

    if (array2 === undefined || array1 < array2) {
      mergedArray.push(array1);
      i++;
    } else {
      mergedArray.push(array2);
      j++;
    }
  }
  return mergedArray;
}

console.log(mergee(arr1, arr2));
