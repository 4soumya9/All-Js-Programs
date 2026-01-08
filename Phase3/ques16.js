// Write logic to get unique objects from below array ?
// I/P [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name:
// "111111"}];
// O/P [{name: "sai"},{name:"Nang"}{name: "111111"}
const arr = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

function getUni(arr) {
  const seen = new Set();
  const unique = arr.filter((item) => {
    const key = `${item.name}`;
    // const key = `${item.name}-${item.age}`;

    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });

  return unique;
}
console.log(getUni(arr));
